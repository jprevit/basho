<script setup>
import { Wrestler } from '../models/Wrestler.js';


const props = defineProps({ wrestler: { type: Wrestler, required: true } })

function test() {
    console.log('testing')
}

</script>


<template>

    <section v-if="wrestler" class="container-fluid">
        <section class="row">
            <div class="col p-0 text-center">
                <img class="pfp rounded-pill"
                    src="https://cdn.discordapp.com/attachments/1234923682137243649/1234936338222940332/sumo-not-found.png?ex=663485d7&is=66333457&hm=0cd6e5505573a012f3b41f0b773ea31c169aeb97ea501012a77a83d76ecb78df&"
                    alt="player pfp">
                <p>{{ wrestler.name }}</p>
            </div>
        </section>
    </section>

    <section v-else class="container-fluid">
        <section class="row">
            <div class="col p-0 text-center">
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="pfp-wrapper">
                            <img @click="test" class="pfp"
                                src="https://www.sumo.or.jp/img/sumo_data/rikishi/270x474/20110008.jpg">
                        </div>
                    </div>
                </div>
                <p @click="test">Place Holder Wrestler</p>
            </div>
        </section>
    </section>

</template>


<style lang="scss" scoped>
// dont touch this here be dragons
.pfp {
    --zoom: 3;
    --x: 50%;
    --y: 50%;
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