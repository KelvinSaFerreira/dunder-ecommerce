<script setup>

</script>

<template>
  <header :class="$style.header">
    <div>
      <figure>
        <img src="../assets/images/dunder-logo.png" alt="Dunder Mifflin Logo" />
      </figure>
      <div>
        <app-input placeholder="Pesquise produtos na Dunder Mifflin" />
      </div>

    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  background-color: #ebebe3;
  width: 100vw;
  height: 25vh;
}
</style>