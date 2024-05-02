<script setup>

import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Wrestler } from "../models/Wrestler.js";
import WrestlerCard from "../components/WrestlerCard.vue";
import DraftCard from "../components/DraftCard.vue";



const activeWrestlers = computed(() => AppState.activeWrestler)
const wrestlers = computed(() => AppState.wrestlers)
const props = defineProps({ wrestler: { type: Wrestler, required: true } })

</script>


<template>
  <div class="container-fluid">
    <div>
      <h1>Component Viewer</h1>
    </div>
    <div class="section">
      <h2>Rikishi Cards</h2>
      <section class="container text-center rikishi-card border-dark border-bottom border-3">
        <div class="row">
          <div class="col-2 my-3 rikishi-photo-round border border-3 border-gold text-primary">
          </div>

          <div class="col-4 text-start">
            <h3 class="">Terunofuji</h3>
            <h5>Yokozuna 1</h5>
          </div>
          <div class="col-6">
            <div class="row align-content-center bg-charcoal text-white">
              <div class="col-4">
                <h6 class="m-auto fw-bold">64%</h6>
                <p>Career</p>
              </div>
              <div class="col-4">
                <h6 class="m-auto fw-bold">5-1</h6>
                <p>Basho</p>
              </div>
              <div class="col-4">
                <h3 class="m-auto border border-3 border-primary bg-white text-charcoal p-4 basho-rank">1</h3>
              </div>
            </div>
          </div>
        </div>







      </section>
      <div class="col-6 col-md-4  ol-lg-3">
        <WrestlerCard />
      </div>
      <div v-for="wrestler in wrestlers" :key="wrestler.id" class="col-6 col-md-4  ol-lg-3">
        <WrestlerCard :wrestler="wrestler" />

        <!-- <div class="container">
        <section class="container text-center rikishi-card">

          <div class="row rikishi-card-top rounded-top-4 mx-1 text-primary">

          </div>


          <div class="row rikishi-card-center text center border-primary border-bottom border-5 border-top border-5">
            <h3 class="mt-1 mb-0">Terunofuji</h3>
            <h5>Yokozuna 1</h5>
          </div>


          <div
            class="row p-3 pb-0 rikishi-card-bottom mx-1 border-bottom border-start border-end border-primary rounded-bottom-4 border-5 bg-charcoal text-white">
            <div class="col-4">
              <h6 class="fw-bold">64%</h6>
              <p>Career</p>
            </div>
            <div class="col-4">
              <h3 class="border border-3 border-primary bg-white text-charcoal p-4 basho-rank">1</h3>
            </div>
            <div class="col-4">
              <h6 class="fw-bold">5-1</h6>
              <p>Basho</p>
            </div>
          </div>
        </section>
      </div> -->



      </div>
    </div>

    <div class="row">
      <h2>Draft Cards</h2>
      <section>
        <DraftCard />
      </section>
    </div>
  </div>


</template>


<style lang="scss" scoped>
.rikishi-card {
  .rikishi-card-top {
    height: 20dvh;
    // background-image: url("src/assets/img/gold-coin-background.png"); //if we get wrestler photos with transparent backgrounds
    background-image: url("https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg");
    background-size: cover;
    background-position: top;
  }

  .rikishi-card-middle {}

  .rikishi-card-bottom {}
}

.rikishi-photo-round {
  height: 80px;
  width: 80px;
  border-radius: 50em;
  // background-image: url("src/assets/img/gold-coin-background.png"); //if we get wrestler photos with transparent backgrounds
  background-image: url("https://www.sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg");
  background-size: cover;
  background-position: top;
}

.basho-rank {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>