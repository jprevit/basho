<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Player } from '../models/Player.js';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { League } from "../models/League.js";


// let placeholderWrestlers = [1, 2, 3, 4, 5]

const props = defineProps({ player: { type: Player, required: true } })
// const leagueProps = defineProps({ league: { type: League, required: true } }) // NOTE seems like I need this for 

const league = props.player.league


async function findLeaguePlayers() {
    try {
        const leagueId = league.id
        console.log('player leagues', leagueId);
        await leaguesService.findLeaguePlayers(leagueId)
    } catch (error) {
        Pop.toast('Could not find players by league ID for leagues card', 'error')
        console.error(error)
    }
}



async function setLeaguePlayers() {
    const playerPoints = props.player.league.players
    console.log('player points', playerPoints);
    // props.player.league.players.sort((a, b) => a.playerPoints - b.points);

}


// async function setStableWrestlers() {
//     try {
//         console.log('playerId', props.player.id);
//         await tournamentsService.setStableWrestlers(props.player.id)
//     } catch (error) {
//         Pop.toast('could not set stable wrestlers', 'error')
//         console.error(error)
//     }
// }

onMounted(() => {
    // setStableWrestlers()
    findLeaguePlayers()
    setLeaguePlayers()
})

</script>


<template>
    <div v-if="player" class="container-fluid">
        <div class="row">
            <div class="col-2 rounded-start bg-darkblue text-light text-center">
                <div class="row">
                    <div class="col">
                        <h2 class="mt-1"><i class="text-gold mdi mdi-medal"></i>1</h2>
                        <hr />
                        <PlayerHead :player="player" />
                        <div class="text row justify-content-around">
                            <div class="col-3">
                                <span class="text-gold fw-bold fs-5">
                                    {{ player.points }}
                                </span>
                            </div>
                            <div class="col-4 text-green fs-5">
                                <span>5</span>
                                <i class="mdi mdi-arrow-up"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-10 d-flex flex-column">
                <div class="row bg-lightblue rounded rounded-bottom-0 rounded-start-0 top-bar-height">
                    <div class="col d-flex align-items-center">
                        <p class="me-1 mb-0 fw-bold">00%</p>
                        <p class="mb-0"> wins | 12 - 8</p>
                    </div>
                    <div>
                        <h4>{{ player.league.leagueName }}</h4>
                    </div>
                </div>
                <div class="row text-light bg-mainblue flex-grow-1 rounded rounded-start-0 rounded-top-0">
                    <div v-for="player in props" :key="player.id" class=" col pt-4">
                        <PlayerHead :player="player" />
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
        </div>
    </div>
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
    height: 5dvh;
}
</style>