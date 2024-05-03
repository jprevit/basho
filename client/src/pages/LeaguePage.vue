<script setup>
import MyStable from '../components/MyStable.vue';
import PlayerHead from '../components/PlayerHead.vue';

</script>

<template>
  <section class="container-fluid">
    <div class="row">

      <div class="col-12 col-md-2 text-center align-content-center top-row-height">
        <div class="d-flex justify-content-center pt-5">
          <h3 class="shield">1</h3>
        </div>

        <div>
          <div class="text-center pt-2">
            Your Standing
          </div>

          <div class="d-flex align-self-stretch justify-content-evenly pt-2">
            <div>23pts</div>
            <div>+2</div>
          </div>
        </div>


        <div class="pt-5">34% Wins</div>
      </div>

      <div class="col-12 col-md-10 p-0 top-row-height bg-charcoal">
        <img src="src/assets/img/sumo-ring-grey.jpg" alt="" class="img-fluid top-row-img">
      </div>

      <!-- bottom row -->
      <div class="col-12 col-md-2 bg-mainblue p-0 bottom-row-height overflow-y-scroll">
        <div class="">
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
          <PlayerHead />
        </div>
      </div>
      <div class="col-12 col-md-10 bg-charcoal bottom-row-height text-light overflow-y-scroll">
        <div class="row justify-content-between">
          <div class="col-6 col-md-3 p-5">
            <h3>Jiggle Brothers</h3>
            <h5>Created 12 May 2024</h5>
          </div>

          <div class="col-6 col-md-3 p-5">
            <p>Invite Code: 12344fd</p>
            <p role="button" class="text-red">X Close Room</p>
          </div>

        </div>
        <div class="row justify-content-evenly">
          <div class="col-6 col-md-2">
            <WrestlerCard />
          </div>
          <div class="col-6 col-md-2">
            <WrestlerCard />
          </div>
          <div class="col-6 col-md-2">
            <WrestlerCard />
          </div>
          <div class="col-6 col-md-2">
            <WrestlerCard />
          </div>
          <div class="col-6 col-md-2">
            <WrestlerCard />
          </div>
        </div>
      </div>


    </div>
  </section>

</template>

<style scoped lang="scss">
.top-row-height {
  height: 280px;
}

.bottom-row-height {
  height: calc(100dvh - 344px);
}

@media only screen and (min-width: 768px) {
  .top-row-img {
    object-position: 0px 0px;
    object-position: 0px -130px;
  }
}

.top-row-img {
  object-fit: cover;
  min-height: 30dvh;
}

.shield {
  min-height: 64px;
  min-width: 64px;
  border: 5px solid gold;
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
  position: relative;
}

.text-pos {
  position: relative;
  transform: translate(0px, -20px);
}
</style>