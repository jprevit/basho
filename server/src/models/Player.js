import { Schema } from "mongoose";

export const PlayerSchema = new Schema({
    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    leagueId: { type: Schema.ObjectId, required: true, ref: 'League' },
    points: { type: Number, required: true, default: 0, min: 0, max: 1000 }
}, {
    timestamps: true, toJSON: { virtuals: true }
})

PlayerSchema.virtual('league', {
    localField: 'leagueId',
    ref: 'League',
    foreignField: '_id',
})

PlayerSchema.virtual('profile', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})