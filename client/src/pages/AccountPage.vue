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
      <!-- <div class="col-lg-2 col-md-4 d-none d-md-block full-height py-2 bg-mainblue ">

        <div class="">
          <div class="" v-if="account">
            <div class="text-center mt-5">
              <img class="rounded-4 mb-5" :src="account.picture" alt="account-picture" />
            </div>
            <h3 class="mb-3 mt-3 p-3"> {{ account.name }}</h3>
            <p class="mb-3 p-3 ">{{ account.email }}</p>
          </div>
          <div v-else>
            <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
          </div>
        </div>
      </div> -->
      <div class="col-12 d-flex flex-column gap-5 bg-sand p-3 bgopacitydark">
        <h1 class="text-white text-center mt-3 mb-0">My Leagues</h1>
        <section v-for="player in myPlayers" :key="player.id" class="row mx-auto mx-md-2 mx-sm-5">
          <span class="d-none d-sm-block w-100">
            <MyLeaguesCard :player="player" class="mb-4" />
          </span>
          <span class="d-block d-sm-none">
            <MyLeaguesCardMobile :player="player" />
          </span>
        </section>
      </div>
    </section>

  </div>

</template>

<style scoped lang="scss">
.img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
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
