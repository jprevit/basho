<script setup>
import { computed, onMounted } from 'vue';
import PlayerHead from '../components/PlayerHead.vue';
import { AppState } from '../AppState.js';
import Pop from "../utils/Pop.js";
import { leaguesService } from "../services/LeaguesService.js";
import { useRoute } from "vue-router";
import MyStable from '../components/MyStable.vue';
import { logger } from "../utils/Logger.js";
import { tournamentsService } from "../services/TournamentsService.js";

const activeLeague = computed(() => AppState.activeLeague)
const activeLeagueState = computed(() => AppState.activeLeague.state)
const activePlayers = computed(() => AppState.activePlayers)
const activeTournament = computed(() => AppState.activeTournament)
const tournamentWrestlers = computed(() => AppState.tournamentWrestlers)


const route = useRoute()

// This function gets all data needed to draw data to the page. Sets active League and Tournament
async function setupLeaguePage() {
    try {
        await getLeagueById()
        await setActiveLeague()
        await getTournamentByTournamentId()
        await assignWrestlerPictures()
        await getPlayersByLeagueId()
    } catch (error) {
        Pop.toast('Could not Setup Page', 'error')
        logger.error(error)
    }

}
const leagueState = {
    starting: 'starting',
    drafting: 'drafting',
    running: 'running',
    ended: 'ended'
}

async function setActiveLeague() {
    try {
        await leaguesService.setActiveLeague(route.params.leagueId)
    } catch (error) {
        Pop.toast("Couldn't Set Active League", 'error')
        logger.error(error)
    }
}

async function getLeagueById() {
    try {
        await leaguesService.getLeagueById(route.params.leagueId)
    } catch (error) {
        Pop.toast("Couldn't get League By ID", 'error')
        logger.error(error)
    }
}

async function getPlayersByLeagueId() {
    try {
        await leaguesService.getPlayersByLeagueId(route.params.leagueId)
    } catch (error) {
        Pop.toast("Couldn't get Players By League Id", 'error')
        logger.error(error)
    }
}

async function changeLeagueState() {
    try {
        await leaguesService.changeLeagueState(route.params.leagueId)
    } catch (error) {
        Pop.toast("Couldn't Change League State", 'error')
        logger.error(error)
    }
}

async function getTournamentByTournamentId() {
    try {

        await tournamentsService.getTournamentByTournamentId(activeLeague.value.tournamentId)
        logger.log(AppState.activeLeague)
    } catch (error) {
        Pop.toast("Couldn't get Tournament By Tournament ID", 'error')
        logger.error(error)
    }
}

async function getMyStable() {
    try {
        await tournamentsService.getMyStable()
    } catch (error) {
        Pop.toast('could not get my wrestlers', 'error')
        console.error(error)
    }
}

async function assignWrestlerPictures() {
    try {
        await tournamentsService.assignWrestlerPictures()
    }
    catch (error) {
        Pop.toast('could not assign wrestler pictures', 'error');
        console.error(error)
    }
}

onMounted(() => {
    setupLeaguePage()
})

</script>


<template>
    <!-- This section is only displayed during the starting portion of the league before the drafting has begun -->
    <!-- TODO be sure to include v-if="activeLeagueState == 'starting'" in section -->
    <button @click="changeLeagueState()" class="btn btn-primary">CHANGE STATE</button>
    <section v-if="activeLeague && activeLeague.state == 'starting'" id="starting"
        class="container-fluid bg-charcoal text-light">
        <section class="col">
            <section class="row">
                <img src="src\assets\img\sumo-around-ring.jpg" alt="sumo wrestlers standing in circle around a ring"
                    class="banner_img p-0">
            </section>
            <section class="row justify-content-around mt-2">
                <div class="col-2">

                </div>
                <div class="col-8">
                    <section class="row mt-2">
                        <div class="col-6">
                            <h3>{{ activeLeague.leagueName }}</h3>
                            <div>Created {{ new Date(activeLeague.startDate).toLocaleDateString() }}</div>
                        </div>

                    </section>
                    <div class="row mt-5 justify-content-between align-items-center">
                        <div class="col-4">
                            <h1 class="m-0 p-0">Invite</h1>
                        </div>
                        <div class="col-6 text-end">
                            <!-- FIXME This needs to be changed once we get players for the league -->
                            <p class="m-0 p-0">Remaining Positions: <i>{{ activeLeague.playerCapacity }}</i></p>
                        </div>
                        <hr />
                        <div class="col-12">
                            <div class="row mt-2 ">
                                <div v-for="player in activePlayers" :key="player.id"
                                    class="col-2 mx-2 pt-2 bg-mainblue rounded">
                                    <PlayerHead :player="player" />
                                </div>

                            </div>
                            <div class="row justify-content-end my-3">
                                <button class="btn btn-mainblue rounded-pill col-3 text-light fw-bold"
                                    @click="changeLeagueState()">Start
                                    Drafting!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-end mt-2">
                        <p>Invite Code: {{ activeLeague.id }}</p>
                        <p role="button" class="text-red">X Close Room</p>
                    </div>
                </div>
            </section>
        </section>
    </section>

    <!-- This section displayed during drafting phase -->
    <section v-if="activeLeague && activeLeague.state == 'drafting'" id="drafting"
        class="grid-wrapper container-fluid sumostandingbg">
        <div class="player-sidebar-col p-0 bg-mainblue">
            <div v-for="player in activePlayers" :key="player.id" class="p-2">
                <PlayerHead :player="player" />
            </div>

        </div>
        <div
            class="player-draft-picks d-flex row justify-content-around border-bottom border-gold border-5 py-4 text-light bg-charcoal">

            <!-- <div class="col-2">
                <WrestlerCard />
            </div> -->

            My Stable will go here at some point

        </div>
        <div class="wrestlers-to-draft d-flex row justify-content-around bgopacitydark py-4 text-light">
            <div v-for="wrestler in tournamentWrestlers" :key="wrestler.rikishiID"
                class="col-xxl-2 col-lg-3 col-5 mx-2">
                <WrestlerCard :wrestler="wrestler" />
            </div>
        </div>
    </section>

    <!-- This section displayed during running phase -->
    <section v-if="activeLeague && activeLeague.state == 'running'" id="running" class="container-fluid sumostandingbg">
        <section class="row  bgopacitylight py-3 pb-4 sticky-top">
            <div class="col">
                <div class="row justify-content-around">
                    <h1 class="col-5">Jiggle Brothers: Day 4 Results</h1>
                    <h3 class="col-5 text-end">Basho Date: June 2021</h3>
                </div>
                <div class="row justify-content-between px-5">
                    <button class="btn btn-mainblue rounded-pill col-2">Prev Day</button>
                    <button class="btn btn-mainblue rounded-pill col-2">Next Day</button>
                </div>
            </div>
        </section>
        <section class="row p-5 bgopacitydark gap-5">
            <div v-for="player in activePlayers" :key="player.id" class="col">
                <MyStable :player="player" />

            </div>

        </section>
    </section>

    <!-- NOTE This is placeholder data for when the league has ended-->
    <section v-if="activeLeague && activeLeague.state == 'ended'" id="ended" class="container-fluid sumostandingbg">
        <div><span>ENDED</span></div>
    </section>
</template>


<style lang="scss" scoped>
.banner_img {
    object-fit: cover;
    object-position: 50% 40%;
    max-height: 30vh;
    filter: contrast(50%);
}

.grid-wrapper {
    display: grid;
    grid-template-columns: 2;
    height: calc(100vh - 64px);
}

.player-sidebar-col {
    grid-column: 1;
    grid-row: 1/3;
    max-height: 100%;
    overflow-y: scroll;
    margin-right: 13px;
}

.player-draft-picks {
    grid-column: 2;
    grid-row: 1;
}

.wrestlers-to-draft {
    grid-column: 2;
    grid-row: 2;
    overflow-y: scroll;
}

.sumostandingbg {
    background-image: url(src/assets/img/sumo-around-ring.jpg);
}

.bgopacitydark {
    background-blend-mode: overlay;
    background-color: rgba(65, 65, 65, 0.9);
}

.bgopacitylight {
    background-blend-mode: overlay;
    background-color: rgba(255, 255, 255, 0.7);
}
</style>