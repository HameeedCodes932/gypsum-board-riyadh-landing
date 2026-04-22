import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Lead from '@/lib/models/Lead';
import nodemailer from 'nodemailer';

// ── Input validation ─────────────
function validateInput(data: { name?: string; phone?: string; message?: string }) {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) errors.push('الاسم مطلوب (حرفين على الأقل)');
  if (!data.phone || !/^[\d+\-() ]{7,20}$/.test(data.phone.trim())) errors.push('رقم الهاتف غير صحيح');
  if (data.message && data.message.length > 1000) errors.push('الرسالة طويلة جداً');
  return errors;
}

// ── Send email notification ──────
async function sendEmailNotification(lead: { name: string; phone: string; message: string }) {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) return;

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT) || 587,
    secure: Number(EMAIL_PORT) === 465,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });

  await transporter.sendMail({
    from: `"موقع جبس بورد" <${EMAIL_USER}>`,
    to: EMAIL_TO,
    subject: `🔔 عميل جديد: ${lead.name}`,
    html: `
      <div dir="rtl" style="font-family:Arial,sans-serif;padding:20px;">
        <h2 style="color:#d4a017;">عميل جديد من الموقع</h2>
        <p><strong>الاسم:</strong> ${lead.name}</p>
        <p><strong>الهاتف:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>
        <p><strong>الرسالة:</strong> ${lead.message || 'لا توجد رسالة'}</p>
        <p><strong>الوقت:</strong> ${new Date().toLocaleString('ar-SA')}</p>
      </div>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const errors = validateInput(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    await connectToDatabase();
    const lead = await Lead.create({
      name: body.name.trim(),
      phone: body.phone.trim(),
      message: body.message?.trim() || '',
      source: 'website',
    });

    // Fire-and-forget email
    sendEmailNotification({
      name: lead.name,
      phone: lead.phone,
      message: lead.message,
    }).catch(console.error);

    return NextResponse.json({
      success: true,
      message: 'تم استلام طلبك بنجاح! سنتواصل معك قريباً.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, errors: ['حدث خطأ، يرجى المحاولة لاحقاً'] },
      { status: 500 }
    );
  }
}
