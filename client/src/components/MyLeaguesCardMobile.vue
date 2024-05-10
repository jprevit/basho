<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { Player } from '../models/Player.js';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { League } from "../models/League.js";
import App from "../App.vue";


// let placeholderWrestlers = [1, 2, 3, 4, 5]

const props = defineProps({ player: { type: Player, required: true } })
// const activePlayers = computed(() => AppState.activePlayers)
// const myLeagues = computed(() => AppState.myLeagues)
const league = props.player.league
// const players = league.players
let cardPlayers = ref([])


async function findMeInPlayers(players) {
    const myId = props.player.id
    const myIndex = players.findIndex(player => player.id == myId)
    players.splice(myIndex, 1)
    console.log('players with me removed', players);
    return players
}

//This sets the reference object cardPlayers, so that each card that is drawn contains the player that have the league Id associated with the MyLeaguesCard
async function getThisLeaguesPlayers() {
    try {
        const leagueId = league.id
        const players = await leaguesService.findLeaguePlayers(leagueId)
        console.log('🎮', players);
        findMeInPlayers(players)
        cardPlayers.value = players
        return players
    } catch (error) {
        Pop.toast('could not set players to this new array thing', 'error')
        console.error(error)
    }
}


onMounted(() => {
    getThisLeaguesPlayers()
})

</script>


<template>
    <div v-if="player && cardPlayers" class="container-fluid">
        <div class="row p-0">
            <div class="col-12 rounded-top-3 bg-darkblue border border-5 border-mainblue text-light text-center">
                <div class="row">

                    <div class="col text-center">
                        <h2 class="border-bottom pb-2 my-3 fs-1">{{ player.league.leagueName }}
                            <RouterLink :to="{ name: 'ActiveLeague', params: { leagueId: player.league.id } }">
                                <span role="button" class="w-auto to-league-button">
                                    <i class="mdi mdi-arrow-right-bold-circle-outline text-gold fs-1 outline"></i>
                                    <i class="mdi mdi-arrow-right-bold-circle text-gold fs-1 filled"></i>
                                </span>
                            </RouterLink>
                        </h2>



                        <h4>{{ AppState.account.name }}</h4>
                        <div class="row justify-content-around align-content-center pb-2">
                            <div class="col border-end border-2">
                                <span class="text-gold fw-bold fs-2">
                                    {{ player.points }}
                                </span>
                            </div>
                            <div class="col text-green fs-2 border-end border-2">
                                <span>5</span>
                                <i class="mdi mdi-arrow-up"></i>
                            </div>
                            <span class="fs-2 col"><i class="text-gold mdi mdi-medal"></i>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12 d-flex flex-column">
                <!-- <div class="row bg-lightblue top-bar-height">
                    <div class="col d-flex align-items-center">
                        <p class="me-1 mb-0 fw-bold">00%</p>
                        <p class="mb-0"> wins | 12 - 8</p>
                    </div>
                </div> -->

                <div class="row p-2  pb-3 text-light bg-mainblue flex-grow-1 rounded-bottom-3">
                    <h4 class="text-center mt-3 fw-bold">Other Players</h4>
                    <div v-for="onePlayer in cardPlayers" :key="onePlayer.id"
                        class="col-12 px-1 px-3 bg-darkblue rounded rounded-2 mb-3 league-card">
                        <!-- <PlayerHead :player="onePlayer" /> -->
                        <div class="row justify-content-start align-content-center p-2">{{ onePlayer.profile.name
                            }}
                        </div>
                        <div class="row  mb-3 justify-content-start align-content-center ps-2 mt-2">
                            <div v-if="onePlayer.profile.picture" class="col-3">
                                <!-- <object class="pfp" data="src/assets/img/defaultPfp.png" type="image/png"> -->
                                <img class="pfp rounded-pill" :src="onePlayer.profile.picture" alt="player headshot">
                                <!-- </object> -->
                            </div>
                            <div v-else class="col-3">
                                <img class="pfp rounded-pill"
                                    src="https://s.gravatar.com/avatar/c9174347320c2d85224c…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fis.png"
                                    alt="no image for this user">
                            </div>



                            <div class="col-6 d-flex justify-content-start align-items-center">
                                <p class="m-0 fw-bold">4-2 <i class="mdi mdi-arrow-up text-green"></i></p>
                            </div>
                            <span class="fs-3 col-3 my-auto text-center border-2 border-start"><i
                                    class="text-gold opacity-75 mdi mdi-medal"></i>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-end">

            </div>
        </div>
    </div>

    <!-- </div> -->
</template>


<style lang="scss" scoped>
.league-card {
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.25);
}

.pfp {
    max-width: 100%;
    height: auto;
    object-position: center;
    object-fit: contain;
}

.rank-circle {
    width: 100%;
    max-height: 30px;
    border-radius: 50%;
}

.border-radius {
    border-radius: 25%;
}

.top-bar-height {
    height: 8dvh;
}

.filled {
    display: none;
}

.outline {
    text-decoration: none;
}

.to-league-button:hover {

    // NOTE this is used for the button in the card so that the icon can be nice and big instead of being tiny inside the square of a button
    .outline {
        display: none;
    }

    .filled {
        display: inline-block;
    }

}
</style>