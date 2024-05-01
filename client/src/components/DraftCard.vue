<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";


const activeWrestler = computed(() => AppState.activeWrestler)
</script>


<template>
  <div v-if="activeWrestler"></div>
  <div class="container">
    <section class="row rounded rounded-3 bg-sand p-3 w-75">

      <div class="col-4 p-0">
        <img class="rounded-start-3 img-fluid draft-photo"
          src="https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg" alt="">
      </div>
      <div class="col-8 ps-4 d-flex flex-column">
        <div class="row justify-content-between align-items-top">
          <h3 class="w-auto">Terunofuji</h3>
          <span class="fs-5 w-auto"><i class="mdi mdi-account-group"></i> Isegehama</span>
        </div>
        <h5>Yokozuna 1</h5>

        <!-- Icons will be added for each of these later -->
        <div class="row rounded my-3 mx-1 p-2 bg-tan justify-content-between align-items-top text-center g-2">
          <div class="col">
            <h4 class="mb-0">63%</h4>
            <h5 class="mt-0">win</h5>
          </div>
          <div class="col">
            <h4 class="mb-0">381 <span class="fs-6">lb</span></h4>

          </div>
          <div class="col">
            <h4 class="mb-0">6'3"</h4>
          </div>
        </div>
        <div class="row justify-content-end">
          <button class="btn btn-primary rounded-pill w-auto">Draft Rikishi</button>
        </div>
      </div>



    </section>
  </div>

  <h1>Draft Me</h1>
</template>


<style lang="scss" scoped>
.draft-photo {
  object-position: center;
  object-fit: cover;
}
</style>