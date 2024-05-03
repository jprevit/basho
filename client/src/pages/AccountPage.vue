<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

const account = computed(() => AppState.account)

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
        <section class="row  mx-5 ">
          <MyStable />
        </section>
        <section class="row mx-5 ">
          <MyStable />
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
