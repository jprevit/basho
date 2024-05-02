<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="d-flex">

    <router-view />
  </main>
  <!-- <footer class="bg-charcoal text-light">
    BASHO!
  </footer> -->
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

*::-webkit-scrollbar {
  width: 1em;
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--bs-charcoal);
  outline: 1px solid slategrey;
}

:root {
  --main-height: calc(100vh - 32px - 64px);
}



footer {
  display: grid;
  place-content: center;
  height: 32px;
}

main {
  // background-image: url("src/assets/img/traditional-art.Jpeg");
  // background-position: center;
  // background-size: cover;
  //overlay: ;
}

#routerview {
  z-index: 2;
}




// #overlay {
//   position: absolute;
//   background-color: #77C5E3;
//   z-index: 1;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   opacity: .6;
// }</style>
