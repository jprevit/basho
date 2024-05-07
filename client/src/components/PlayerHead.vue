<script setup>
import { Player } from '../models/Player.js';


const props = defineProps({ player: { type: Player, required: true } })

</script>

<!-- NOTE to use this component, you will need to pass a player to it, otherwise it will use the default -->

<template>

    <section v-if="player" class="container-fluid">
        <section class="row p-0">
            <div class="col p-0 text-center">
                <img class="pfp rounded-pill" :src="player.profile.picture" alt="player pfp">
                <p>{{ player.profile.name }}</p>
            </div>
        </section>
    </section>

    <section v-else class="container-fluid">
        <section class="row p-0">
            <div class="col p-0 text-center">
                <img class="pfp rounded-pill"
                    src="	https://s.gravatar.com/avatar/c9174347320c2d85224c…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fis.png"
                    alt="placeholder">
                <p>Place Holder Player</p>
            </div>
        </section>
    </section>

</template>


<style lang="scss" scoped>
.pfp {
    max-width: 100%;
    height: auto;
    object-position: center;
    object-fit: contain;
}
</style>