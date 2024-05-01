<script setup>

</script>


<template>
  <div class="container-fluid">
    <div>
      <h1>Component Viewer</h1>
    </div>
    <div class="section">
      <h2>Rikishi Cards</h2>
      <div class="col-3">
        <section class="container text-center rikishi-card">

          <div class="row rikishi-card-top mx-3">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt perferendis recusandae iusto a illo
              corrupti laudantium nemo inventore! Maiores ad veniam
              ducimus dolor.</p>
          </div>

          <hr class="opacity-100 border-5 text-primary my-0" />

          <div class="row rikishi-card-center text center">
            <h3 class="">Rikishi Name</h3>
            <h5>Hatamoto</h5>
          </div>

          <hr class="opacity-100 border-5 text-primary my-0" />

          <div class="row rikishi-card-bottom mx-3 bg-charcoal text-white">
            <div class="col-4">
              <h6 class="fw-bold">64%</h6>
              <p>Career</p>
            </div>
            <div class="col-4">
              <h3 class="border border-3 border-primary p-4 basho-rank">1</h3>
            </div>
            <div class="col-4">
              <h6 class="fw-bold">5-1</h6>
              <p>Basho</p>
            </div>
          </div>


        </section>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.rikishi-card {
  .rikishi-card-top {
    border-top-right-radius: 2em;
    border-top-left-radius: 2em;
    background-image: url("src/assets/img/gold-coin-background.png");
    background-size: cover;
    background-position: center;
  }

  .rikishi-card-middle {}

  .rikishi-card-bottom {
    border-width: 0px 6px 6px 6px;
    border-style: solid;
    border-color: rgb(38, 38, 239);
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