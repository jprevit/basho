<script setup>

</script>

<template>
  <div class="container-fluid traditional-bg d-flex flex-column flex-grow">
    <!-- <div class="d-flex flex-column flex-grow"> -->
    <section id="mainrow" class="row mainbg justify-content-around">
      <section class="col-md-6 col-12 p-5 d-flex flex-column justify-content-around text-light text-shadow">
        <div class="ms-5">
          <h1>Welcome to BASHO!</h1>
          <p class="fs-2">Basho is the Japanese term for a sumo tournament. Here at BASHO! we make getting into sumo
            easy and
            fun!
            Don’t
            worry about having to learn all the terms upfront, get competing with your friends right away!</p>
        </div>
        <button class="btn btn-grey border border-lightblue border-5 ms-5 fs-2 w-50 py-3">Do Something</button>
      </section>
      <section class="col-md-5 d-none d-md-flex">
        <img src="src\assets\img\sumo-kick.png" class="img-fluid grayflipper">
      </section>
    </section>
    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
.grayflipper {
  filter: grayscale(1);
  transform: rotatey(180deg) translate(50px, 0px);
  max-height: 90dvh;
}

#mainrow {
  z-index: 2;
}

.traditional-bg {
  background-image: url("src/assets/img/traditonal-blue-filter.png");
  background-position: center;
  background-size: cover;
}

.flex-grow {
  height: 100dvh;
}
</style>
