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
        <div class="row">
            <div class="col-2 rounded-start bg-darkblue text-light text-center">
                <div class="row h-100 align-content-center">
                    <div class="col">
                        <h2 class="mt-1 border-bottom border-2"><i class="text-gold mdi mdi-medal"></i>1</h2>

                        <PlayerHead :player="player" class="my-auto" />
                        <!-- <div class="text row justify-content-around">
                            <div class="col-3">
                                <span class="text-gold fw-bold fs-5">
                                    {{ player.points }}
                                </span>
                            </div>
                            <div class="col-4 text-green fs-5">
                                <span>5</span>
                                <i class="mdi mdi-arrow-up"></i>
                            </div>
                        </div> -->
                        <div class="row justify-content-around align-content-center pb-2">
                            <div class="col-12 col-md-6 border-end border-2">
                                <span class="text-gold fw-bold fs-5">
                                    {{ player.points }} <span class="fs-6 text-white">pts</span>
                                </span>
                            </div>
                            <div class="col-12 col-md-6 fs-5">
                                <p class="m-0 text-light fw-bold">4-2 <i class="mdi mdi-arrow-up text-green"></i></p>
                            </div>
                            <!-- <div class="col text-green fs-5 border-end border-2">
                                <span>5</span>
                                <i class="mdi mdi-arrow-up"></i>
                            </div> -->

                            <!-- </div> -->
                            <!-- <p class="me-1 mb-0 fw-bold">00%</p>
                        <p class="mb-0"> wins | 12 - 8</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10 d-flex flex-column">
                <div class="row bg-lightblue rounded rounded-bottom-0 rounded-start-0 top-bar-height">
                    <!-- <div class="col d-flex align-items-center"> -->

                    <div class="col text-end">
                        <h4>{{ player.league.leagueName }}
                            <RouterLink :to="{ name: 'ActiveLeague', params: { leagueId: player.league.id } }">
                                <span role="button" class="w-auto to-league-button">
                                    <i class="mdi mdi-arrow-right-bold-circle-outline text-gold fs-2 empty"></i>
                                    <i class="mdi mdi-arrow-right-bold-circle text-gold fs-2 filled"></i>
                                </span>
                            </RouterLink>
                        </h4>
                    </div>
                </div>
                <div
                    class="row justify-content-around text-light bg-mainblue flex-grow-1 rounded rounded-start-0 rounded-top-0">
                    <h6>Other Players</h6>
                    <div v-for="onePlayer in cardPlayers" :key="onePlayer.id" class=" col-3 pt-4">
                        <PlayerHead :player="onePlayer" />
                        <div class="row">
                            <div class="col-6 d-flex justify-content-end align-items-center">
                                <h6
                                    class="bg-white text-dark rank-circle d-flex border border-gold border-2 align-items-center justify-content-center m-1 fw-bold">
                                    1</h6>
                            </div>
                            <div class="col-6 d-flex justify-content-start align-items-center">
                                <p class="m-0 fw-bold">4-2 <i class="mdi mdi-arrow-up text-green"></i></p>
                            </div>
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
.rank-circle {
    width: 30px;
    height: 30px;
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
    .empty {
        display: none;
    }

    .filled {
        display: inline-block;
    }

}
</style>