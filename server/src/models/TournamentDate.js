import { Schema } from "mongoose";

export const TournamentDateSchema = new Schema({
    date: { type: String, required: true }
})