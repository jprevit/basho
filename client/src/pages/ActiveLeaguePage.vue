<script setup>

</script>


<template>
    <section class="container-fluid bg-charcoal text-light">
        <section class="row">
            <img src="src\assets\img\sumo-around-ring.jpg" alt="sumo wrestlers standing in circle around a ring"
                class="banner_img p-0">
        </section>
        <section class="row justify-content-center text-center">
            <div class="col">
                <h3>Jiggle Brothers</h3>
                <div>Created 12 May 2024</div>
            </div>

        </section>
        <section class="row justify-content-around">
            <div class="col-2">

            </div>
            <div class="col-8">
                <div class="row justify-content-between align-items-center">
                    <div class="col-4">
                        <h1 class="m-0 p-0">Invite</h1>
                    </div>
                    <div class="col-6 text-end">
                        <p class="m-0 p-0">Remaining Positions: <i>5</i></p>
                    </div>
                    <hr />
                    <div class="col-12">
                        head goes here
                    </div>
                </div>
            </div>
            <div class="col">
                Invite Code: 12344fd
                <button class="btn btn-red">Close Room</button>
            </div>
        </section>

    </section>
</template>


<style lang="scss" scoped>
.banner_img {
    object-fit: cover;
    object-position: 50% 30%;
    max-height: 40vh;
    filter: contrast(50%);
}
</style>