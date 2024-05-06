import { Schema } from "mongoose";


export const WrestlerPoolSchema = new Schema({
    name: { type: String, required: true },

}, { timestamps: true, toJSON: { virtuals: true } })