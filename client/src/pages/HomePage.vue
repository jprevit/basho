<script setup>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { wrestlersService } from '../services/WrestersService.js';
import { tournamentsService } from '../services/TournamentsService.js';
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";
import { leaguesService } from "../services/LeaguesService.js";

// async function getAllWrestlers() {
//   try {
//     await wrestlersService.getAllWrestlers()
//   }
//   catch (error) {
//     Pop.error(error);
//   }
// }

// async function getBashoById() {
//   try {
//     await tournamentsService.getBashoById()
//   } catch (error) {
//     Pop.error(error)
//   }

// }

// async function getWrestlerById() {
//   try {
//     await wrestlersService.getWrestlerById()
//   } catch (error) {
//     Pop.toast("Couldn't get Wrestler By Id", 'error')
//     logger.error(error)
//   }
// }

async function draftStable() {
  try {
    if (!AppState.activeTournament)
      throw new Error('There is no Active Tournament')
    await wrestlersService.getRandomWrestler()
    // await wrestlersService.draftStable()
  } catch (error) {
    Pop.toast("Couldn't Draft Stable Members")
    logger.error(error)
  }
}




onMounted(() => {
  // getAllWrestlers()
  // getBashoById()
  // getWrestlerById()

})
</script>

<template>
  <div class="container-fluid traditional-bg d-flex flex-column flex-wrap flex-grow-1 p-0">
    <!-- <div class="d-flex flex-column flex-grow"> -->
    <section class="row justify-content-around w-100">
      <section class="col-md-6 col-12 p-5 d-flex flex-column justify-content-center text-light text-shadow">
        <div class="ms-5 mb-5">
          <h1 class="header-font">Welcome to BASHO!</h1>
          <p class="fs-3">Basho is the Japanese term for a sumo tournament. Here at BASHO! we make getting into sumo
            easy and
            fun!
            Don’t
            worry about having to learn all the terms upfront, get competing with your friends right away!</p>
        </div>
        <RouterLink :to="{ name: 'GetStarted' }">
          <button style="border-radius: 25px;"
            class="btn btn-grey border border-5 border-lightblue ms-5 fs-2 w-50 py-3 mt-5">Get
            Started</button>
        </RouterLink>
        <button @click="draftStable()" class="btn btn-link text-white">test drafting</button>
      </section>
      <section class="col-md-5 d-none d-md-flex">
        <img src="src\assets\img\sumo-kick.png" class="sumoStomp">
      </section>
    </section>

    <section class="row flex-grow-1 d-flex bg-charcoal justify-content-center text-center text-light m-0 p-4">
      <div class="col d-flex justify-content-center align-items-center">
        <a class="d-flex gap-3 py-3" target="_blank" href="https://sumowrestling.fandom.com/wiki/Sumowrestling_Wiki">
          <svg id="Capa_1" class="" enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50"
            fill="#f8f9fd" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="m459.736 0h-407.501c-28.802 0-52.235 23.433-52.235 52.235v158.794c0 5.522 4.477 10 10 10s10-4.478 10-10v-158.794c0-17.774 14.461-32.235 32.235-32.235h407.501c17.79 0 32.264 14.461 32.264 32.235v407.501c0 17.79-14.474 32.264-32.264 32.264h-407.501c-17.774 0-32.235-14.474-32.235-32.264v-158.879c0-5.522-4.477-10-10-10s-10 4.478-10 10v158.879c0 28.819 23.433 52.264 52.235 52.264h407.501c28.819 0 52.264-23.445 52.264-52.264v-407.501c0-28.802-23.445-52.235-52.264-52.235z" />
              <path
                d="m255.986 48.103c-114.627 0-207.883 93.256-207.883 207.883 0 114.628 93.256 207.884 207.883 207.884s207.883-93.256 207.883-207.884-93.256-207.883-207.883-207.883zm0 395.766c-103.599 0-187.883-84.284-187.883-187.884 0-103.599 84.284-187.883 187.883-187.883s187.883 84.284 187.883 187.883c0 103.6-84.284 187.884-187.883 187.884z" />
              <path
                d="m304.763 129.62v-11.112c0-11.344-9.229-20.572-20.573-20.572h-56.38c-11.344 0-20.573 9.229-20.573 20.572v11.112c-35.567 13.727-63.891 42.051-77.617 77.617h-11.111c-11.344 0-20.573 9.229-20.573 20.572v56.381c0 11.344 9.229 20.572 20.573 20.572h11.111c13.726 35.566 42.05 63.891 77.617 77.617v11.084c0 11.344 9.229 20.572 20.573 20.572h56.38c11.344 0 20.573-9.229 20.573-20.572v-11.083c35.567-13.727 63.891-42.051 77.617-77.617h11.083c11.344 0 20.573-9.229 20.573-20.572v-56.381c0-11.344-9.229-20.572-20.573-20.572h-11.083c-13.726-35.567-42.05-63.891-77.617-77.618zm89.274 98.19v56.381c0 .3-.273.572-.573.572h-18.141c-4.334 0-8.175 2.792-9.512 6.914-11.37 35.049-39.083 62.763-74.133 74.134-4.123 1.337-6.914 5.178-6.914 9.512v18.142c0 .3-.273.572-.573.572h-56.38c-.316 0-.573-.257-.573-.572v-18.142c0-4.334-2.792-8.175-6.914-9.512-35.05-11.371-62.763-39.085-74.133-74.134-1.337-4.122-5.178-6.914-9.512-6.914h-18.169c-.289 0-.573-.283-.573-.572v-56.381c0-.3.273-.572.573-.572h18.169c4.334 0 8.175-2.792 9.512-6.914 11.37-35.049 39.083-62.763 74.133-74.134 4.123-1.337 6.914-5.178 6.914-9.512v-18.17c0-.3.273-.572.573-.572h56.38c.289 0 .573.283.573.572v18.17c0 4.334 2.792 8.175 6.914 9.512 35.05 11.371 62.763 39.085 74.133 74.134 1.337 4.122 5.178 6.914 9.512 6.914h18.141c.315-.001.573.256.573.572z" />
              <path
                d="m304.032 220.984h-96.093c-5.523 0-10 4.478-10 10s4.477 10 10 10h96.093c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
              <path
                d="m304.032 270.987h-96.093c-5.523 0-10 4.478-10 10s4.477 10 10 10h96.093c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
              <path
                d="m56.402 461.998h27.184c5.523 0 10-4.478 10-10s-4.477-10-10-10h-27.184c-5.523 0-10 4.478-10 10s4.477 10 10 10z" />
              <path
                d="m455.569 441.998h-27.184c-5.523 0-10 4.478-10 10s4.477 10 10 10h27.184c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
              <path
                d="m83.586 50.002h-27.184c-5.523 0-10 4.478-10 10s4.477 10 10 10h27.184c5.523 0 10-4.478 10-10s-4.477-10-10-10z" />
              <path
                d="m455.569 70.002c5.523 0 10-4.478 10-10s-4.477-10-10-10h-27.184c-5.523 0-10 4.478-10 10s4.477 10 10 10z" />
              <path
                d="m10 265.972c5.523 0 10-4.492 10-10.015s-4.477-10-10-10-10 4.478-10 10v.028c0 5.523 4.477 9.987 10 9.987z" />
            </g>
          </svg>
          <h2 class="text-nowrap  mb-0 mt-1">Learn About Sumo</h2>
        </a>
      </div>
    </section>
    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
.sumoStomp {
  filter: grayscale(1);
  transform: rotatey(180deg) translate(50px, 0px);
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.traditional-bg {
  background-image: url("src/assets/img/traditonal-blue-filter.png");
  background-position: center;
  background-size: cover;


}

.header-font {
  font-size: 48px;


}

a {
  text-decoration: none;
  color: #f8f9fd;
}
</style>
