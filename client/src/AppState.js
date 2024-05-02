import { reactive } from 'vue'
import { Tournament } from './models/Tournament.js'
import { Wrestler } from './models/Wrestler.js'
import { Player } from './models/Player.js'
import { League } from './models/League.js'
import { StableMember } from "./models/StableMember.js"


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {Tournament[]} */
  accountTournaments: [],
  /** @type {Tournament} */
  activeTournament: null,

  /** @type {Wrestler[]} */
  wrestlers: [],

  /** @type {Wrestler} */
  activeWrestler: null,

  /**@type {Wrestler[]} */
  tournamentWrestlers: [],

/**@type {StableMember[]} */
activeStableWrestlers:[],

  /**@type {Player[]} */
  activePlayers:[],

  /**@type {League} */
  activeLeague: null
})
