<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";


const activeWrestler = computed(() => AppState.activeWrestler)
</script>


<template>

  <div v-if="activeWrestler">
    <!-- FIXME when live testing starts, this closing tag needs to be moved to the end of the template -->
  </div>
  <div class="container-fluid">


    <!-- desktop -->
    <div class="d-none d-md-block">
      <section class="row rounded rounded-3 bg-sand p-3">

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

          <div
            class="row rounded my-3 mx-1 p-lg-4 bg-tan justify-content-between align-items-top text-center g-2 major-stats">
            <div class="col my-auto">
              <i class="mdi mdi-trophy fs-1 text-darkblue"></i>
              <h4 class="mb-0">63% <span class="fs-6">win</span></h4>

            </div>
            <div class="col my-auto">
              <i class="mdi mdi-scale fs-1 text-darkblue"></i>
              <h4 class="mb-0">381 <span class="fs-6">lb</span></h4>

            </div>
            <div class="col my-auto">
              <i class="mdi mdi-human-male-height-variant fs-1 text-darkblue"></i>
              <h4 class="mb-0">6'3"</h4>
              <h4 class="my-0">
                <span class="d-md-none fs-6">tall</span>
              </h4>
            </div>
          </div>
          <div class="row justify-content-end">
            <button class="btn btn-primary rounded-pill w-auto fs-5 fw-bold">Draft Rikishi</button>
          </div>
        </div>
      </section>
    </div>


    <!-- mobile -->
    <section class="d-md-none row rounded rounded-4 bg-sand p-2">
      <div class="draft-photo-mobile rounded-top-4 w-75 m-auto mt-3">
        <!-- photo here -->
      </div>

      <div class="card-divisions border-primary border-top border-3">
      </div>
      <div class="col-12 ps-4 d-flex flex-column">


        <h2 class="fs-1 w-auto pt-3 text-center">Terunofuji</h2>
        <h5 class="text-center py-0">Yokozuna 1</h5>
        <div
          class="row rounded rounded-4 my-3 mx-1 p-lg-4 bg-tan justify-content-between align-items-top text-center g-2 major-stats">
          <div class="col my-auto">
            <i class="mdi mdi-trophy fs-1 text-darkblue"></i>
            <h4 class="mb-0">63% <span class="fs-6">win</span></h4>

          </div>
          <div class="col my-auto">
            <i class="mdi mdi-scale fs-1 text-darkblue"></i>
            <h4 class="mb-0">381 <span class="fs-6">lb</span></h4>

          </div>
          <div class="col my-auto">
            <i class="mdi mdi-human-male-height-variant fs-1 text-darkblue"></i>
            <h4 class="mb-0">6'3"</h4>
          </div>
        </div>
        <span class="fs-5 text-center pb-3"><i class="mdi mdi-account-group"></i> Isegehama</span>
        <div class="row">
          <button class="btn btn-primary rounded-pill fs-5 fw-bold">Draft Rikishi</button>
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

.draft-photo-mobile {
  height: 20dvh;
  // background-image: url("src/assets/img/gold-coin-background.png"); //if we get wrestler photos with transparent backgrounds
  background-image: url("https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg");
  background-size: cover;
  background-position: top;
}

.card-divisions {
  width: 90%;
  margin: auto;
}

.major-stats {
  height: 20dvh;
}
</style>