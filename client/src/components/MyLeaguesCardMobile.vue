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
        <div class="row p-0 mt-0">
            <div class="col-12 rounded-top-3 bg-darkblue border border-5 border-mainblue text-light text-center">
                <div class="row">

                    <div class="col text-center">
                        <h2 class="border-bottom pb-2 my-3 fs-1">{{ player.league.leagueName }}
                            <RouterLink :to="{ name: 'ActiveLeague', params: { leagueId: player.league.id } }">
                                <span role="button" class="w-auto to-league-button">
                                    <i class="mdi mdi-arrow-right-bold-circle-outline text-gold fs-1 empty"></i>
                                    <i class="mdi mdi-arrow-right-bold-circle text-gold fs-1 filled"></i>
                                </span>
                            </RouterLink>
                        </h2>


                        <!-- SECTION my stats section -->
                        <h4>{{ AppState.account.name }}</h4>
                        <div class="row justify-content-around align-content-center pb-2">


                            <div class="col text-gold border-end border-2">
                                <span class="fw-bold fs-3">
                                    {{ player.points }} <span class="text-white fs-4">pts</span>
                                </span>
                            </div>


                            <div class="col fs-3 border-end border-2">
                                <p class="m-0 text-light fw-bold">4-2 <i class="mdi mdi-arrow-up text-green"></i></p>
                            </div>


                            <span class="fs-3 col"><i class="text-gold mdi mdi-medal"></i>1</span>


                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12 d-flex flex-column">

                <!-- SECTION other players section -->
                <div class="row p-2  pb-3 text-light bg-mainblue flex-grow-1 rounded-bottom-3">
                    <h4 class="text-center mt-3 fw-bold">Other Players</h4>
                    <div v-for="onePlayer in cardPlayers" :key="onePlayer.id"
                        class="col-12 px-1 px-3 bg-darkblue rounded rounded-2 mb-3 league-card">

                        <!-- SECTION each player's card -->
                        <div
                            class="row justify-content-center border-bottom border-1 text-light align-content-center p-2 w-75 mb-3 mx-auto">
                            {{ onePlayer.profile.name }}
                        </div>
                        <div class="row mb-3 justify-content-start align-content-center ps-2 mt-2">
                            <div v-if="onePlayer.profile.picture" class="col w-auto p-0 m-0">
                                <!-- <object class="pfp" data="src/assets/img/defaultPfp.png" type="image/png"> -->
                                <img class="pfp rounded-pill" :src="onePlayer.profile.picture" alt="player headshot">
                                <!-- </object> -->
                            </div>
                            <div v-else class="col-3">
                                <img class="pfp rounded-pill"
                                    src="https://s.gravatar.com/avatar/c9174347320c2d85224c…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fis.png"
                                    alt="no image for this user">
                            </div>

                            <!-- SECTION beginning of stats -->
                            <div class="fs-4 col my-auto text-center text-gold">
                                <span class="fw-bold fs-4">
                                    {{ player.points }} <span class="text-light fs-5">pts</span>
                                </span>


                            </div>
                            <div class="fs-4 col my-auto text-center border-2 border-start">
                                <p class="m-0 text-light fw-bold">4-2 <i
                                        class=" fs-5 m-0 mdi mdi-arrow-up text-green"></i></p>
                            </div>


                            <span class="fs-4 col my-auto text-center border-2 border-start"><i
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
    .empty {
        display: none;
    }

    .filled {
        display: inline-block;
    }

}
</style>