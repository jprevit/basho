<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted } from "vue";
import WrestlerConversionForm from "../components/WrestlerConversionForm.vue";
import Pop from "../utils/Pop.js";
import { tournamentsService } from "../services/TournamentsService.js";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";

const tournaments = computed(() => AppState.allTournaments)
const allWrestlers = []




async function populateAllTournaments() {
  try {
    const allTournaments = await tournamentsService.populateAllTournaments()
    pullWrestlers()
  }
  catch (error) {
    Pop.toast(error);
    console.error(error);
  }
}

function pullWrestlers() {
  console.log('From Appstate', AppState.allTournaments);

  AppState.allTournaments.forEach(tournament => {
    tournament.eastWrestlers.forEach(wrestler => {
      allWrestlers.push({
        id: wrestler.rikishiID,
        name: wrestler.shikonaEn
      })
    }),
      tournament.westWrestlers.forEach(wrestler => {
        allWrestlers.push({
          id: wrestler.rikishiID,
          name: wrestler.shikonaEn
        })
      })
  })
  filterWrestlers(allWrestlers)
  console.log('Filtered Wrestlers', allWrestlers);
  console.log('All Wrestlers', allWrestlers);
}


function filterWrestlers(allWrestlers) {
  const uniqueWrestlers = []
  allWrestlers.forEach(wrestler => {
    if (!uniqueWrestlers.includes(wrestler)) {
      uniqueWrestlers.push(wrestler)
    }
  })
  console.log('Unique Wrestlers', uniqueWrestlers);

}

onMounted(() =>
  populateAllTournaments()
)


</script>


<template>
  <div class="container">
    <div class="row">
      <button style="border-radius: 25px;" class="btn btn-grey border border-5 border-lightblue fs-2  w-75 py-3 mt-3 "
        data-bs-toggle="modal" title="Convert Wrestlers" data-bs-target="#convertWrestlersModal">Get Wrestlers to
        Convert</button>
    </div>

    <div class="row">

      <div v-for="tournament in tournaments" :key="tournament.id">

        {{ tournament.eastWrestlers }}
      </div>

    </div>




  </div>


  <WrestlerConversionForm />
</template>


<style lang="scss" scoped></style>