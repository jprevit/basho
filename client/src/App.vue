<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <!-- <div id="">

    </div> -->
    <router-view />
  </main>
  <footer class="bg-charcoal text-light">
    BASHO!
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}



footer {
  display: grid;
  place-content: center;
  height: 32px;
}

main {
  background-image: url("src/assets/img/traditional-art.Jpeg");
  background-position: center;
  background-size: cover;
  //overlay: ;
}

#routerview {
  z-index: 2;
}

#overlay {
  position: absolute;
  background-color: #77C5E3;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .6;
}
</style>
