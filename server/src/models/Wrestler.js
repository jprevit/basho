import { Schema } from "mongoose";


export const WrestlerSchema = new Schema({
    name: { type: String, required: true },
    currentRank: { type: String, required: true },
    stable: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    winsByDivision: { type: Number, required: true },
    lossByDivision: { type: Number, required: true },
    birthdate: { type: Date, required: true },
    debut: { type: Date, required: true },
    rikishiId: { type: Number, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })