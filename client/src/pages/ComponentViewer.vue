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
      <div v-for="wrestler in wrestlers" :key="wrestler.id" class="col-6 col-md-4  ol-lg-3">
        <WrestlerCard :wrestler="wrestler" />
        <!-- <section class="container text-center rikishi-card">

          <div class="row rikishi-card-top mx-1 text-primary">
          </div>

          <div class="row rikishi-card-center text center border-primary border-bottom border-5 border-top border-5">
            <h3 class="">Terunofuji</h3>
            <h5>Yokozuna 1</h5>
          </div>

          <div
            class="row p-3 pb-0 rikishi-card-bottom mx-1 border-bottom border-start border-end border-primary border-5 bg-charcoal text-white">
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


        </section> -->
      </div>
    </div>

    <div class="section">
      <h2>Draft Cards</h2>
      <section>
        <DraftCard />
      </section>
      <!-- <section class="container text-center rikishi-card">

          <div class="row rikishi-card-top mx-1 text-primary">
          </div>

          <div class="row rikishi-card-center text center border-primary border-bottom border-5 border-top border-5">
            <h3 class="">Terunofuji</h3>
            <h5>Yokozuna 1</h5>
          </div>

          <div
            class="row p-3 pb-0 rikishi-card-bottom mx-1 border-bottom border-start border-end border-primary border-5 bg-charcoal text-white">
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


        </section> -->
    </div>
  </div>


</template>


<style lang="scss" scoped>
.rikishi-card {
  .rikishi-card-top {
    border-top-right-radius: 2em;
    height: 20dvh;
    border-top-left-radius: 2em;
    // background-image: url("src/assets/img/gold-coin-background.png"); //if we get wrestler photos with transparent backgrounds
    background-image: url("https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg");
    background-size: cover;
    background-position: top;
  }

  .rikishi-card-middle {}

  .rikishi-card-bottom {
    // border-width: 0px 6px 6px 6px;
    // border-style: solid;
    // border-color: rgb(38, 38, 239);
    border-bottom-right-radius: 2em;
    border-bottom-left-radius: 2em;

  }

  // hr {
  //   opacity: 100;
  //   border-bottom: 3px solid rgb(38, 38, 239);
  //   margin: 0;
  // }
}

.basho-rank {
  border-radius: 50%;
  aspect-ratio: 1/1;
}
</style>