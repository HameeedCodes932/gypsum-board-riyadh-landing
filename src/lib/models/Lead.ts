import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    phone: { type: String, required: true, trim: true, maxlength: 20 },
    message: { type: String, trim: true, maxlength: 1000, default: '' },
    source: { type: String, default: 'website' },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
export default Lead;
