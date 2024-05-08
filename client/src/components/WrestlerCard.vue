<script setup>
import { computed } from "vue";
import { TournamentWrestler } from "../models/TournamentWrestler.js";



const props = defineProps({ wrestler: { type: TournamentWrestler, required: true } })

const coverImg = computed(() => `url(${props.wrestler.imgUrl})`)

</script>


<template>

  <section v-if="wrestler" class="container text-center rikishi-card my-3">

    <div class="row rikishi-card-top rounded-top-2 mx-1 text-primary">

    </div>

    <!-- <hr class="opacity-100 border-5 text-primary my-0" /> -->

    <div class="row rikishi-card-center text-center border-primary border-bottom border-5 border-top border-5">
      <h4 class="">{{ wrestler.shikonaEn }}</h4>
      <h5>{{ wrestler.rank }}</h5>
    </div>

    <!-- <hr class="opacity-100 border-5 text-primary my-0" /> -->

    <div
      class="row p-1 pb-0 mx-1 border-bottom border-start border-end border-primary rounded-bottom-2 border-5 bg-charcoal text-white">
      <div class="col-12 py-1 text-center d-flex flex-column align-items-center order-2">
        <h6 class="fw-bold m-0">64% <span>Wins</span></h6>

      </div>
      <div class="col-12 d-flex justify-content-center align-items-center py-1 order-1">
        <h3 class="border border-3 border-primary bg-white text-charcoal align-items-center m-0 basho-rank">1</h3>
      </div>
      <div class="col-12 py-1 text-center order-3">
        <p class="fw-bold m-0"><span class="text-green">5</span> - <span class="text-red">1</span></p>
      </div>
    </div>


  </section>

</template>


<style lang="scss" scoped>
// SECTION rikishi card styles

.rikishi-card {
  .rikishi-card-top {
    height: 20dvh;
    // background-image: url("src/assets/img/gold-coin-background.png"); //if we get wrestler photos with transparent backgrounds
    // background-image: url("https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg");
    background-image: v-bind(coverImg);
    background-size: cover;
    background-position: top;
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

  .rikishi-card-middle {}

  .rikishi-card-bottom {}

  // hr {
  //   opacity: 100;
  //   border-bottom: 3px solid rgb(38, 38, 239);
  //   margin: 0;
  // }
}

.basho-rank {
  border-radius: 50%;
  min-width: 50px;
  min-height: 50px;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  aspect-ratio: 1/1;
}
</style>