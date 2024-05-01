import { Schema } from "mongoose";


export const TournamentSchema = new Schema({
    date: { type: Date, required: true },
    eastWrestlers: { type: Array, required: true },
    westWrestlers: { type: Array, required: true },
}, {
    timestamps: true, toJSON: { virtuals: true }
})

