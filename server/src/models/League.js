import { Schema } from "mongoose";

export const LeagueSchema = new Schema({
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    tournamentId: { type: String, required: true, ref: 'Tournament' },
    leagueName: { type: String, required: true, minlength: 3, maxlength: 25 },
    stableCapacity: { type: Number, required: true, min: 0, max: 10, default: 5 },
    playerCapacity: { type: Number, required: true, min: 2, max: 8 },
    startDate: { type: Date, required: true, default: new Date() },
    public: { type: Boolean, required: true, default: false },
    players: { type: Array, required: true },
    state: { type: String, required: true, default: 'starting' },
    tournamentWrestlers: { type: Array, required: true }
},
    { timestamps: true, toJSON: { virtuals: true } })

LeagueSchema.virtual('tournament', {
    localField: 'tournamentId',
    ref: 'Tournament',
    foreignField: 'bashoId',
    justOne: true
})

LeagueSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})