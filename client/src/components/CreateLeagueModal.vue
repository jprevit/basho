<script setup>
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import Pop from '../utils/Pop.js';


const leagueData = ref({
    leagueName: '',
    maxPlayers: null,
    public: false
})


async function createLeague() {
    try {
        console.log('hi')
    } catch (error) {
        Pop.toast('could not create league', 'error')
        console.error(error)
    }
}
</script>


<template>

    <!-- Modal -->
    <div class="modal fade" id="createLeagueModal" tabindex="-1" aria-labelledby="createLeagueModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="createLeagueModalLabel">Create League</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="container" @submit.prevent="createLeague()">
                        <div class="row mb-2">
                            <div class="form-floating">
                                <input v-model="leagueData.leagueName" type="text" class="form-control" id="leagueName"
                                    placeholder="Enter Your League's Name" minlength="3" maxlength="25">
                                <label for="leagueName" class="ms-3">League Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-check">
                                    <label for="publicCheck" class="form-check-label me-2">Public</label>
                                    <input v-model="leagueData.public" id="publicCheck" type="checkbox" required="true"
                                        class="form-check-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="maxPlayers" class="me-2">Max Players</label>
                                <input id="maxPlayers" type="number" required="true" min="3" max="10">
                            </div>
                        </div>





                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>