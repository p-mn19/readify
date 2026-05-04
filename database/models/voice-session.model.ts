import { model, Schema, models } from "mongoose";
import {IVoiceSession} from "@/types";

const VoiceSessionSchema = new Schema<IVoiceSession>({
    clerkId: { type: String, required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true, index: true },
    startedAt:{type:Date,required:true,default:Date.now},
    endedAt:{type:Date},
    durationSeconds:{type:Number,default:0},
    billingPeriodStart:{type:Date,required:true,index:true},
}, { timestamps: true });

VoiceSessionSchema.index({clerkId:1,billingPeriodStart:1}); //decides billing period for a session

const VoiceSession = models.VoiceSession || model<IVoiceSession>('VoiceSession', VoiceSessionSchema);

export default VoiceSession;