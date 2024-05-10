<script setup>
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { logger } from "../utils/Logger.js";
import { useRouter } from "vue-router";

const route = useRouter()

const formData = ref({
    leagueId: ''
})


function resetForm() {
    formData.value = {
        leagueId: ''
    }
}

async function joinLeagueById() {
    try {
        Modal.getOrCreateInstance('#joinLeagueModal').hide()
        await leaguesService.joinLeagueById(formData.value.leagueId)
        resetForm()
    }
    catch (error) {
        Pop.toast(error.response.data.error.message, 'error');
        console.log(error, "joining league error")
    }
}


</script>


<template>

    <!-- Modal -->
    <div class="modal fade" id="joinLeagueModal" tabindex="-1" aria-labelledby="joinLeagueModalLabel"
        aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content bg-darkblue">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="joinLeagueModalLabel">Join League</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="container" @submit.prevent="joinLeagueById()">
                        <div class="row mb-2">
                            <div class="col-12">
                                <div class="form-floating">
                                    <input v-model="formData.leagueId" type="text" class="form-control" id="leagueId"
                                        placeholder="Enter Your League's Id" minlength="3" maxlength="25" required>
                                    <label for="leagueId" class="ms-3">League Id</label>
                                </div>
                            </div>
                            <div class="col-12 text-end">
                                <button type="submit" class="btn btn-charcoal w-50 mt-2">Join</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>