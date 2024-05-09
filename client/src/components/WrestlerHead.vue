<script setup>
import { TournamentWrestler } from '../models/TournamentWrestler.js';


const props = defineProps({ wrestler: { type: TournamentWrestler, required: true } })



</script>


<template>

    <section v-if="wrestler" class="container-fluid">
        <section class="row">
            <div class="col p-0 text-center">
                <div class="row justify-content-center">
                    <div class="col">
                        <img class="pfp" :src="wrestler.imgUrl">
                    </div>
                </div>
                <p>{{ wrestler.shikonaEn }}</p>
            </div>
        </section>
    </section>

    <section v-else class="container-fluid">
        <section class="row">
            <div class="col p-0 text-center">
                <div class="row justify-content-center">
                    <div class="col">
                        <img class="pfp" src="src\assets\img\sumo-not-found.png">
                    </div>
                </div>
                <p>Place Holder Wrestler</p>
            </div>
        </section>
    </section>

</template>


<style lang="scss" scoped>
// dont touch this here be dragons
.pfp {
    --zoom: 2;
    --x: 50%;
    --y: 65%;
    transform: scale(var(--zoom));
    transform-origin: var(--x) var(--y);
    clip-path: inset(calc((1 - 1/var(--zoom)) * (var(--y))) calc((1 - 1/var(--zoom)) * (100% - var(--x))) calc((1 - 1/var(--zoom)) * (100% - var(--y))) calc((1 - 1/var(--zoom)) * (var(--x))) round 50%);
    height: 80px;
    width: 80px;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;
    object-position: 0px 26px;
    pointer-events: none;
}

// .pfp-wrapper {
//     width: 100px;
//     height: 100px;
//     border-radius: 50%;
//     outline: 1px solid red;</style>