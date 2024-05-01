<script setup>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { wrestlersService } from '../services/WrestersService.js';
import { tournamentsService } from '../services/TournamentsService.js';

async function getAllWrestlers() {
  try {
    await wrestlersService.getAllWrestlers()
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getBashoById() {
  try {
    await tournamentsService.getBashoById()
  } catch (error) {
    Pop.error(error)
  }
}

onMounted(() => {
  getAllWrestlers()
  getBashoById()
})
</script>

<template>
  <section id="mainrow" class="row mainbg">
    <section class="col-7">
      <h1>Welcome to BASHO!</h1>
      <p>Basho is the Japanese term for a sumo tournament. Here at BASHO! we make getting into sumo easy and fun! Don’t
        worry about having to learn all the terms upfront, get competing with your friends right away!</p>
    </section>
    <section class="col-5">
      <img src="src\assets\img\sumo-kick.png" class="img-fluid grayflipper">
    </section>
  </section>

</template>

<style scoped lang="scss">
.grayflipper {
  filter: grayscale(1);
  transform: rotatey(180deg) translate(50px, 0px)
}

#mainrow {
  z-index: 2;
}
</style>
