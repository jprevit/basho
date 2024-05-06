<script setup>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from '../AppState.js';

const theme = ref(loadState('theme') || 'light')
const user = computed(() => AppState.account)

onMounted(() => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-charcoal px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-row align-items-center ps-3">
        <svg id="Capa_1" enable-background="new 0 0 512 512" height="51" viewBox="0 0 512 512" width="51"
          xmlns="http://www.w3.org/2000/svg" fill="#77C5E3">
          <g>
            <g>
              <path
                d="m191.09 464.723c16.559 0 33.119-3.202 46.022-9.607 4.947-2.455 6.967-8.456 4.512-13.403s-8.457-6.966-13.403-4.511c-20.127 9.991-54.134 9.99-74.261 0-4.946-2.453-10.947-.435-13.403 4.511-2.455 4.947-.436 10.948 4.512 13.403 12.902 6.405 29.462 9.607 46.021 9.607z" />
              <path
                d="m320.906 464.721c16.562 0 33.13-3.202 46.042-9.603 4.948-2.453 6.971-8.453 4.518-13.401s-8.453-6.97-13.401-4.519c-20.15 9.989-54.172 9.99-74.294.003-4.947-2.453-10.948-.435-13.403 4.511-2.455 4.947-.436 10.948 4.512 13.403 12.901 6.404 29.46 9.606 46.026 9.606z" />
              <path
                d="m502.961 477.844-12.422-86.431c-10.183-70.645-70.608-81.574-115.173-83.65-.043-.002-.087-.004-.13-.005-8.697-.292-20.818-6.924-32.519-17.481 30.073-24.065 49.352-60.925 49.352-102.179 0-55.671-35.101-103.347-84.473-122.36 1.057-4.178 1.605-8.479 1.605-12.878-.001-29.147-23.868-52.86-53.205-52.86-29.321 0-53.175 23.713-53.175 52.859 0 4.408.543 8.707 1.589 12.874-49.378 19.01-84.484 66.689-84.484 122.364 0 41.257 19.282 78.12 49.358 102.185-11.716 10.554-23.829 17.184-32.498 17.476-.041.001-.082.003-.122.005-17.863.817-32.961 2.991-46.157 6.644-5.323 1.474-8.443 6.982-6.97 12.306 1.227 4.43 5.249 7.335 9.632 7.335.883 0 1.781-.118 2.673-.365 11.723-3.245 25.356-5.188 41.682-5.938 19.238-.68 37.886-15.497 48.697-25.926 19.379 11.101 41.846 17.458 65.779 17.458h7.995c23.938 0 46.408-6.359 65.79-17.464 10.795 10.431 29.428 25.251 48.714 25.932 61.149 2.861 89.938 22.759 96.245 66.519l12.423 86.438c.719 4.966.152 7.686-.618 8.575-2.359 2.723-13.857 2.723-18.185 2.723h-35.431v-45.529c0-5.522-4.477-10-10-10s-10 4.478-10 10v45.529h-305.873v-45.529c0-5.522-4.477-10-10-10s-10 4.478-10 10v45.529h-35.431c-4.324 0-15.81 0-18.169-2.723-.773-.892-1.344-3.616-.63-8.589l2.199-15.307c.001-.009.002-.019.004-.027l10.251-71.122c.329-2.338.692-4.435 1.109-6.41 1.142-5.403-2.312-10.71-7.715-11.853-5.407-1.147-10.71 2.313-11.852 7.716-.513 2.428-.954 4.967-1.342 7.728l-10.252 71.12c-.001.01-.002.019-.004.027l-2.195 15.285c-1.525 10.622.213 18.646 5.313 24.531 7.702 8.888 20.138 9.624 33.283 9.624h416.735c13.156 0 25.604-.737 33.306-9.636 5.097-5.888 6.827-13.913 5.291-24.52zm-280.14-424.985c0-18.119 14.882-32.859 33.175-32.859 18.309 0 33.204 14.74 33.204 32.859 0 2.427-.27 4.806-.79 7.127-9.157-2.002-18.663-3.067-28.417-3.067h-7.995c-9.748 0-19.249 1.064-28.401 3.064-.51-2.312-.776-4.689-.776-7.124zm29.178 24.06h7.995c61.798 0 112.074 49.875 112.074 111.179 0 10.375-1.445 20.421-4.137 29.955-28.838-13.02-40.28-37.246-34.017-72.155.596-3.323-.525-6.723-2.981-9.04-2.456-2.316-5.914-3.239-9.199-2.448-50.979 12.254-80.469 12.255-131.478-.001-3.285-.788-6.742.132-9.198 2.45-2.456 2.316-3.577 5.716-2.98 9.039 6.265 34.914-5.177 59.143-34.014 72.162-2.694-9.536-4.139-19.585-4.139-29.963 0-61.303 50.276-111.178 112.074-111.178zm0 222.357c-22.421 0-43.323-6.57-60.859-17.864-.624-.524-1.292-.965-1.995-1.312-16.137-10.884-29.272-25.833-37.902-43.35 33.745-14.797 50.528-42.54 48.298-79.737 41.541 8.756 71.393 8.757 112.912.001-2.227 37.191 14.556 64.931 48.303 79.727-8.649 17.56-21.825 32.541-38.014 43.432-.613.314-1.198.698-1.75 1.148-17.565 11.349-38.517 17.954-60.997 17.954h-7.996z" />
              <path
                d="m47.897 355.552c1.436.718 2.961 1.058 4.464 1.058 3.668 0 7.2-2.025 8.952-5.53l.028-.057c2.47-4.939.454-10.918-4.486-13.388s-10.962-.44-13.431 4.501c-2.469 4.939-.467 10.946 4.473 13.416z" />
            </g>
          </g>
        </svg>
        <h1 class="text-lightblue ms-2 me-4 mt-3">BASHO!</h1>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto gap-4">
        <li>
          <!-- This button will not always go to the active league page, the ID is hard coded because you need it to use this router link, page will break if you remove the id and dont change the router link to go to a different endpoint -->
          <router-link :to="{ name: 'ActiveLeague', params: { leagueId: '66391997b3825fd6ad867260' } }"
            class="btn text-cyan fw-bolder lighten-30 selectable text-uppercase">
            Leagues
          </router-link>
        </li>
        <li>
          <a class="btn text-cyan fw-bolder lighten-30 selectable text-uppercase"
            href="https://sumowrestling.fandom.com/wiki/Sumowrestling_Wiki" target="_blank">
            Learn
          </a>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <!-- <div>
        <button class="btn text-light" @click="toggleTheme"
          :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
          <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
        </button>
      </div> -->
      <button v-if="!user" class="btn btn-sm btn-rounded rounded-pill fw-bold px-4 mx-2 bg-sand">Sign Up</button>
      <Login />
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
