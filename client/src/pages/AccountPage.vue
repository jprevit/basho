<!-- eslint-disable no-console -->
<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { leaguesService } from "../services/LeaguesService.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";
import MyLeaguesCard from "../components/MyLeaguesCard.vue";
import { logger } from "../utils/Logger.js";


const account = computed(() => AppState.account)
const myPlayers = computed(() => AppState.myPlayers)


</script>

<template>
  <div class="container-fluid sumostandingbg">
    <section class="row">
      <div class="col-2 full-height py-2 bg-mainblue ">

        <div class="">
          <div class="" v-if="account">
            <div class="text-center mt-5">
              <img class="rounded-4 mb-5 " :src="account.picture" alt="account-picture" />
            </div>
            <h3 class="mb-3 mt-3 p-3"> {{ account.name }}</h3>
            <p class="mb-3 p-3 ">{{ account.email }}</p>
          </div>
          <div v-else>
            <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column gap-5 bg-sand p-3 bgopacitydark">
        <section v-for="player in myPlayers" :key="player.id" class="row mx-5 ">
          <MyLeaguesCard :player="player" />
        </section>
      </div>
    </section>

  </div>

</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}

.full-height {
  height: calc(100dvh - 64px);
}

.sumostandingbg {
  background-image: url(src/assets/img/sumo-around-ring.jpg);
}

.bgopacitydark {
  background-blend-mode: overlay;
  background-color: rgba(65, 65, 65, 0.9);
}
</style>
