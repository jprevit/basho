import { Schema } from "mongoose";


export const TournamentSchema = new Schema({
    bashoId: { type: String, required: true },
    // date: { type: String, required: true },
    eastWrestlers: { type: Array, required: true },
    westWrestlers: { type: Array, required: true },
}, {
    timestamps: true, toJSON: { virtuals: true }
})

