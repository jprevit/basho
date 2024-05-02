<script setup>
import { computed } from 'vue';
import PlayerHead from '../components/PlayerHead.vue';
import { AppState } from '../AppState.js';

const activeLeagueState = computed(() => AppState.activeLeague.state)

// const leagueState = {
//     starting: 'starting',
//     drafting: 'drafting',
//     running: 'running',
//     ended: 'ended'
// }
</script>


<template>
    <section class="container-fluid bg-charcoal text-light" hidden>
        <!-- This section is only displayed during the starting portion of the league before the drafting has begun -->
        <!-- TODO be sure to include v-if="activeLeagueState == 'starting'" in section -->
        <section id="starting" class="col">
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
                            <h3>Jiggle Brothers</h3>
                            <div>Created 12 May 2024</div>
                        </div>

                    </section>
                    <div class="row mt-5 justify-content-between align-items-center">
                        <div class="col-4">
                            <h1 class="m-0 p-0">Invite</h1>
                        </div>
                        <div class="col-6 text-end">
                            <p class="m-0 p-0">Remaining Positions: <i>5</i></p>
                        </div>
                        <hr />
                        <div class="col-12">
                            <div class="row mt-2">
                                <PlayerHead class="col-2" />
                                <PlayerHead class="col-2" />
                                <PlayerHead class="col-2" />
                                <PlayerHead class="col-2" />
                                <PlayerHead class="col-2" />
                            </div>
                            <div class="row justify-content-end my-3">
                                <button class="btn btn-mainblue rounded-pill col-3 text-light fw-bold">Start
                                    Drafting!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-end mt-2">
                        <p>Invite Code: 12344fd</p>
                        <p role="button" class="text-red">X Close Room</p>
                    </div>
                </div>
            </section>
        </section>

        <!-- This section displayed during drafting phase -->

    </section>

    <!-- <PlayerHead /> -->

    <section id="drafting" class="grid-wrapper">
        <div class="player-sidebar-col">
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
            <PlayerHead />
        </div>
        <div class="player-draft-picks d-flex">
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
        </div>
        <div class="wrestlers-to-draft d-flex flex-wrap">Wrestlers to pick from
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
            <WrestlerCard />
        </div>
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
}

.player-draft-picks {
    grid-column: 2;
    grid-row: 1;
}

.wrestlers-to-draft {
    grid-column: 2;
    grid-row: 2;
    max-height: 100%;
    overflow-y: scroll;
}
</style>