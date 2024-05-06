<script setup>
import { Modal } from 'bootstrap';
import { ref } from 'vue';
import Pop from '../utils/Pop.js';
import { leaguesService } from "../services/LeaguesService.js";
import { logger } from "../utils/Logger.js";
import { useRouter } from "vue-router";
import { wrestlerConversionService } from "../services/WrestlerConversionService.js";

const router = useRouter()

const bashoData = ref({
    bashoDate: '',
})


function resetForm() {
    bashoData.value = {
        bashoDate: '',
    }
}

async function convertWrestlers() {
    try {
        const newLeague = await wrestlerConversionService.getBashoById(bashoData.value)
        resetForm()
        Modal.getOrCreateInstance('#convertWrestlerModal').hide()

        // router.push({ name: 'ActiveLeague', params: { leagueId: newLeague.id } })

    } catch (error) {
        Pop.toast('Could not convert wrestler', 'error')
        logger.error(error)
    }
}
</script>


<template>

    <!-- Modal -->
    <div class="modal fade" id="convertWrestlersModal" tabindex="-1" aria-labelledby="convertWrestlersModalLabel"
        aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content bg-darkblue">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="convertWrestlersModalLabel">Convert Wrestlers</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="container" @submit.prevent="convertWrestlers()">
                        <div class="row mb-2">
                            <div class="form-floating">
                                <input v-model="bashoData.bashoDate" type="text" class="form-control" id="bashoDate"
                                    placeholder="Enter Basho Date" minlength="3" maxlength="25" required>
                                <label for="bashoDate" class="ms-3">Basho Date</label>
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