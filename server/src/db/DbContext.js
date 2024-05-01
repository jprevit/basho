import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { WrestlerSchema } from '../models/Wrestler.js';
import { TournamentDateSchema } from '../models/TournamentDate.js';
import { TournamentSchema } from '../models/Tournament.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Wrestlers = mongoose.model('Wrestler', WrestlerSchema);
  Tournament = mongoose.model('Tournament', TournamentSchema);
  TournamentDates = mongoose.model('TournamentDate', TournamentDateSchema);
}

export const dbContext = new DbContext()
