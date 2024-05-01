import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { WrestlerSchema } from '../models/Wrestler.js';
import { TournamentDateSchema } from '../models/TournamentDate.js';
import { TournamentSchema } from '../models/Tournament.js';
import { LeagueSchema } from '../models/League.js';
import { PlayerSchema } from '../models/Player.js';
import { StableMemberSchema } from '../models/StableMember.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Wrestlers = mongoose.model('Wrestler', WrestlerSchema);
  Tournament = mongoose.model('Tournament', TournamentSchema);
  TournamentDates = mongoose.model('TournamentDate', TournamentDateSchema);
  Leagues = mongoose.model('League', LeagueSchema);
  Players = mongoose.model('Player', PlayerSchema);
  StableMembers = mongoose.model('StableMember', StableMemberSchema)
}

export const dbContext = new DbContext()
