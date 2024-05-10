<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { AppState } from '../AppState.js';
import { Player } from '../models/Player.js';
import Pop from '../utils/Pop.js';
import { tournamentsService } from '../services/TournamentsService.js';
import { League } from '../models/League.js';
import { StableMember } from '../models/StableMember.js';
import { logger } from '../utils/Logger.js';
import { TournamentWrestler } from '../models/TournamentWrestler.js';

const props = defineProps({
    player: { type: Player, required: true }
})

const myStable = computed(() => AppState.activeStableWrestlers)


async function getStableById() {
    try {
        logger.log('mystable sending request for stable', props.player.profile.id)
        const stable = await tournamentsService.getStableById(props.player.profile.id)
        logger.log('mystable', stable)
        AppState.activeStableWrestlers = stable
    } catch (error) {
        Pop.toast('could not get my wrestlers', 'error')
        console.error(error)
    }
}

let myStableofTournamentWrestlers = ref([])

async function associateStablememberAndTournamentWrestler() {
    let tournStable = []
    myStable.value.forEach(stablemember => tournStable.push(AppState.tournamentWrestlers.find(tourn => stablemember.wrestlerId == tourn.rikishiID)))
    console.log('tournstable', tournStable)
    myStableofTournamentWrestlers.value = tournStable
}


onMounted(() => {
    getStableById()
    associateStablememberAndTournamentWrestler()
})

</script>


<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 rounded-start bg-darkblue text-light text-center">
                <div class="row">
                    <div class="col">
                        <h2 class="mt-1"><i class="text-gold mdi mdi-medal"></i>1</h2>
                        <hr />
                        <PlayerHead :player="player" />
                        <div class="text row justify-content-around">
                            <div class="col-3">
                                <span v-if="player" class="text-gold fw-bold fs-5">
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
                </div>
                <div class="row text-light bg-mainblue flex-grow-1 rounded rounded-start-0 rounded-top-0">
                    <!--NOTE this is erroring because it is mad about no v-bind, but since this is just simple placeholder data it should be ok -->
                    <div v-for="stablemember in myStable" :key="stablemember.wrestlerId" class=" col pt-4">
                        <WrestlerHead :wrestler="stablemember" />
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