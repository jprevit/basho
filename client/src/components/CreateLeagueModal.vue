<script setup>
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { logger } from "../utils/Logger.js";
import { useRouter } from "vue-router";

const router = useRouter()

const leagueData = ref({
    leagueName: '',
    playerCapacity: null,
    public: false,
    tournamentId: null
})


function resetForm() {
    leagueData.value = {
        leagueName: '',
        playerCapacity: null,
        public: false,
        tournamentId: null
    }
}

async function createNewLeague() {
    try {
        Modal.getOrCreateInstance('#createLeagueModal').hide()
        const newLeague = await leaguesService.createNewLeague(leagueData.value)
        resetForm()

        // router.push({ name: 'ActiveLeague', params: { leagueId: newLeague.id } })

    } catch (error) {
        Pop.toast('Could not create league', 'error')
        logger.error(error)
    }
}
</script>


<template>

    <!-- Modal -->
    <div class="modal fade" id="createLeagueModal" tabindex="-1" aria-labelledby="createLeagueModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-mainblue">


                <div class="modal-body">
                    <h1 class="modal-title text-center mb-4 p-3 border-bottom text-light fs-3"
                        id="createLeagueModalLabel">
                        Create League</h1>
                    <form class="container" @submit.prevent="createNewLeague()">
                        <div class="row mb-2">
                            <div class="form-floating">
                                <input v-model="leagueData.leagueName" type="text" class="form-control" id="leagueName"
                                    placeholder="Enter Your League's Name" minlength="3" maxlength="25" required>
                                <label for="leagueName" class="ms-3">League Name</label>
                            </div>
                        </div>
                        <div class="row mb-2 align-items-center">
                            <div class="col-6">
                                <div class="form-check">
                                    <label for="publicCheck" class="form-check-label text-light d-block">Public</label>
                                    <input v-model="leagueData.public" id="publicCheck" type="checkbox"
                                        class="form-check-control ed-mcmahon">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-floating">
                                    <input v-model="leagueData.playerCapacity" placeholder="Max Players"
                                        id="playerCapacity" type="number" required min="2" max="8" class="form-control">
                                    <label for="playerCapacity" class="">Max Players</label>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-between border-top p-3 mt-4">
                            <button type="button" class="btn btn-outline-light col-5" data-bs-dismiss="modal"
                                aria-label="Close">Cancel</button>
                            <button type="submit" class="btn btn-light col-5">Create</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
input [type='checkbox'] {
    width: 1.5em;
    height: 1.5em;
    // transform: scale(2);
}

.form-image {
    width: 100%;
    height: auto;
    object-fit: none;
    // object-position: center;
    // overflow: hidden;
}
</style>