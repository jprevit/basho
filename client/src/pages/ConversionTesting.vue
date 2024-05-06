<script setup>
import WrestlerConversionForm from "../components/WrestlerConversionForm.vue";
</script>


<template>
  <div class="container">
    <div class="row">
      <button style="border-radius: 25px;" class="btn btn-grey border border-5 border-lightblue fs-2  w-75 py-3 mt-3 "
        data-bs-toggle="modal" title="Convert Wrestlers" data-bs-target="#convertWrestlersModal">Get Wrestlers to
        Convert</button>
    </div>
  </div>
  <WrestlerConversionForm />
</template>


<style lang="scss" scoped></style>