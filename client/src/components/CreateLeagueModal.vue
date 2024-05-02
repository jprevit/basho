<script setup>
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { logger } from "../utils/Logger.js";


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
        await leaguesService.createNewLeague(leagueData.value)
        resetForm()
        Modal.getOrCreateInstance('#createLeagueModal').hide()


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
        <div class="modal-dialog ">
            <div class="modal-content bg-darkblue">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="createLeagueModalLabel">Create League</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="container" @submit.prevent="createNewLeague()">
                        <div class="row mb-2">
                            <div class="form-floating">
                                <input v-model="leagueData.leagueName" type="text" class="form-control" id="leagueName"
                                    placeholder="Enter Your League's Name" minlength="3" maxlength="25">
                                <label for="leagueName" class="ms-3">League Name</label>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-6">
                                <div class="form-check">
                                    <label for="publicCheck" class="form-check-label me-2">Public</label>
                                    <input v-model="leagueData.public" id="publicCheck" type="checkbox" required="true"
                                        class="form-check-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="playerCapacity" class="me-2">Max Players</label>
                                <input v-model="leagueData.playerCapacity" id="playerCapacity" type="number"
                                    required="true" min="3" max="10" class="form-control">
                            </div>
                        </div>

                        <div class="row justify-content-center justify-content-md-end text-end mt-2 pe-3">
                            <button type="submit" class="btn btn-mainblue col-10 col-md-4">Save changes</button>
                        </div>



                    </form>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>