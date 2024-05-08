import { reactive } from 'vue'
import { Tournament } from './models/Tournament.js'
import { Wrestler } from './models/Wrestler.js'
import { Player } from './models/Player.js'
import { League } from './models/League.js'
import { StableMember } from "./models/StableMember.js"
import { TournamentWrestler } from "./models/TournamentWrestler.js"


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {Tournament[]} */
  accountTournaments: [],
  
  /** @type {Player[]} */
  myPlayers: [],

  /** @type {Tournament} */
  activeTournament: null,

  /**@type {Tournament[]} */
  allTournaments: [],

  /** @type {Wrestler[]} */
  wrestlers: [],

  /** @type {Wrestler} */
  activeWrestler: null,

  /**@type {TournamentWrestler[]} */
  tournamentWrestlers: [],

  /**@type {TournamentWrestler[]} */
  myStable: [],

  /**@type {StableMember[]} */
  activeStableWrestlers: [],

  /**@type {Player[]} */
  activePlayers: [],

  /**@type {League[]} */
  leagues: [],

  /**@type {League[]} */
  myLeagues: [],

  /**@type {League} */
  activeLeague: null,

  /**@type {Wrestler[]} */
  allWrestlers: [],


  imgBaseUrl: 'https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/',
  wrestlerImageIds: [
    {
      sumoName: 'Takakeisho',
      sumoId: '1',
      hasPicture: true,
      pictureId: '20140083',
      
      },
      {
      sumoName: 'Asanoyama',
      sumoId: '2',
      hasPicture: true,
      pictureId: '20160019'
      },
      {
      sumoName: 'Hakuoho',
      sumoId: '3',
      hasPicture: true,
      pictureId: '20230004'
      },
      {
      sumoName: 'Takerufuji',
      sumoId: '5',
      hasPicture: true,
      pictureId: '20220059'
      },
      {
      sumoName: 'Kirishima',
      sumoId: '7',
      hasPicture: true,
      pictureId: '20150034'
      },
      {
        sumoName: 'Kiribayama',
        sumoId: '7',
        hasPicture: true,
        pictureId: '20150034'
      },
      {
      sumoName: 'Kotoshoho',
      sumoId: '8',
      hasPicture: true,
      pictureId: '20170094'
      },
      {
      sumoName: 'Daieisho',
      sumoId: '9',
      hasPicture: true,
      pictureId: '20120003'
      },
      {
      sumoName: 'Onosho',
      sumoId: '10',
      hasPicture: true,
      pictureId: '20130005'
      },
      {
      sumoName: 'Ichiyamamoto',
      sumoId: '11',
      hasPicture: true,
      pictureId: '20170002'
      },
      {
      sumoName: 'Wakatakakage',
      sumoId: '12',
      hasPicture: true,
      pictureId: '20170011'
      },
      {
        sumoName: 'Wakamotoharu',
        sumoId: '13',
        hasPicture: true,
        pictureId: '20110065'
      },
      {
      sumoName: 'Tamawashi',
      sumoId: '14',
      hasPicture: true,
      pictureId: '20040005'
      },
      {
      sumoName: 'Ryuden',
      sumoId: '15',
      hasPicture: true,
      pictureId: '20060023'
      },
      {
      sumoName: 'Nishikigi',
      sumoId: '16',
      hasPicture: true,
      pictureId: '20060025'
      },
      {
      sumoName: 'Endo',
      sumoId: '17',
      hasPicture: true,
      pictureId: '20130036'
      },
      {
      sumoName: 'Azumaryu',
      sumoId: '18',
      hasPicture: true,
      pictureId: '20080097'
      },
      {
      sumoName: 'Hoshoryu',
      sumoId: '19',
      hasPicture: true,
      pictureId: '20170096'
      },
      {
      sumoName: 'Kotonowaka',
      sumoId: '20',
      hasPicture: true,
      pictureId: '20150081'
      },
      {
      sumoName: 'Tobizaru',
      sumoId: '21',
      hasPicture: true,
      pictureId: '20150005'
      },
      {
      sumoName: 'Abi',
      sumoId: '22',
      hasPicture: true,
      pictureId: '20130059'
      },
      {
      sumoName: 'Aoiyama',
      sumoId: '23',
      hasPicture: true,
      pictureId: '20090067'
      },
      {
      sumoName: 'Hiradoumi',
      sumoId: '24',
      hasPicture: true,
      pictureId: '20160042'
      },
      {
      sumoName: 'Takarafuji',
      sumoId: '25',
      hasPicture: true,
      pictureId: '20090004'
      },
      {
      sumoName: 'Mitakeumi',
      sumoId: '26',
      hasPicture: true,
      pictureId: '20150032'
      },
      {
      sumoName: 'Hokutofuji',
      sumoId: '27',
      hasPicture: true,
      pictureId: '20150042'
      },
      {
      sumoName: 'Ura',
      sumoId: '28',
      hasPicture: true,
      pictureId: '20150028'
      },
      {
      sumoName: 'Kagayaki',
      sumoId: '29',
      hasPicture: true,
      pictureId: '20100039'
      },
      {
        sumoName: 'Kotoeko',
        sumoId: '30',
        hasPicture: true,
        pictureId: '20070057'
      },
      {
      sumoName: 'Tsurugisho',
      sumoId: '31',
      hasPicture: true,
      pictureId: '20140002'
      },
      {
      sumoName: 'Mitoryu',
      sumoId: '32',
      hasPicture: true,
      pictureId: '20170047'
      },
      {
      sumoName: 'Shodai',
      sumoId: '33',
      hasPicture: true,
      pictureId: '20140019'
      },
      {
      sumoName: 'Midorifuji',
      sumoId: '34',
      hasPicture: true,
      pictureId: '20160082'
      },
      {
      sumoName: 'Sadanoumi',
      sumoId: '35',
      hasPicture: true,
      pictureId: '20030054'
      },
      {
      sumoName: 'Myogiryu',
      sumoId: '36',
      hasPicture: true,
      pictureId: '20090065'
      },
      {
      sumoName: 'Takanosho',
      sumoId: '37',
      hasPicture: true,
      pictureId: '20100039'
      },
      {
      sumoName: 'Meisei',
      sumoId: '38',
      hasPicture: true,
      pictureId: '20110029'
      },
      {
      sumoName: 'Chiyoshoma',
      sumoId: '39',
      hasPicture: true,
      pictureId: '20090066'
      },
      {
      sumoName: 'Nishikifuji',
      sumoId: '40',
      hasPicture: true,
      pictureId: '20160081'
      },
      {
      sumoName: 'Oho',
      sumoId: '41',
      hasPicture: true,
      pictureId: '20180002'
      },
      {
      sumoName: 'Chiyomaru',
      sumoId: '42',
      hasPicture: true,
      pictureId: '20070085'
      },
      {
      sumoName: 'Tochinoshin',
      sumoId: '43',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Takayasu',
      sumoId: '44',
      hasPicture: true,
      pictureId: '20050022'
      },
      {
      sumoName: 'Terunofuji',
      sumoId: '45',
      hasPicture: true,
      pictureId: '20110008'
      },
      {
      sumoName: 'Ichinojo',
      sumoId: '46',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Okinoumi',
      sumoId: '47',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Daishoho',
      sumoId: '48',
      hasPicture: true,
      pictureId: '20130002'
      },
      {
      sumoName: 'Shonannoumi',
      sumoId: '49',
      hasPicture: true,
      pictureId: '20140051'
      },
      {
      sumoName: 'Kinbozan',
      sumoId: '50',
      hasPicture: true,
      pictureId: '20210057'
      },
      {
      sumoName: 'Chiyonokuni',
      sumoId: '51',
      hasPicture: true,
      pictureId: '20060071'
      },
      {
      sumoName: 'Bushozan',
      sumoId: '52',
      hasPicture: true,
      pictureId: '20140006'
      },
      {
      sumoName: 'Hokuseiho',
      sumoId: '53',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Tohakuryu',
      sumoId: '54',
      hasPicture: true,
      pictureId: '20190059'
      },
      {
      sumoName: 'Roga',
      sumoId: '55',
      hasPicture: true,
      pictureId: '20180068'
      },
      {
      sumoName: 'Gonoyama',
      sumoId: '56',
      hasPicture: true,
      pictureId: '20210023'
      },
      {
      sumoName: 'Shimazuumi',
      sumoId: '57',
      hasPicture: true,
      pictureId: '20120033'
      },
      {
      sumoName: 'Hidenoumi',
      sumoId: '60',
      hasPicture: true,
      pictureId: '20120049'
      },
      {
      sumoName: 'Daiamami',
      sumoId: '64',
      hasPicture: true,
      pictureId: '20160002'
      },
      {
      sumoName: 'Shimanoumi',
      sumoId: '65',
      hasPicture: true,
      pictureId: '20120047'
      },
      {
      sumoName: 'Kitanowaka',
      sumoId: '66',
      hasPicture: true,
      pictureId: '20190026'
      },
      {
      sumoName: 'Terutsuyoshi',
      sumoId: '67',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Kotokuzan',
      sumoId: '70',
      hasPicture: true,
      pictureId: '20090080'
      },
      {
      sumoName: 'Churanoumi',
      sumoId: '71',
      hasPicture: true,
      pictureId: '20160048'
      },
      {
      sumoName: 'Akua',
      sumoId: '73',
      hasPicture: true,
      pictureId: '20100090'
      },
      {
      sumoName: 'Atamifuji',
      sumoId: '74',
      hasPicture: true,
      pictureId: '20200074'
      },
      {
      sumoName: 'Tomokaze',
      sumoId: '102',
      hasPicture: true,
      pictureId: '20170071'
      },
      {
      sumoName: 'Ishiura',
      sumoId: '368',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Yutakayama',
      sumoId: '636',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Chiyotairyu',
      sumoId: '637',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Kaisei',
      sumoId: '674',
      hasPicture: false,
      pictureId: 'noPictureId'
      },
      {
      sumoName: 'Onosato',
      sumoId: '8879',
      hasPicture: true,
      pictureId: '20230048'
      }
  ]
})
