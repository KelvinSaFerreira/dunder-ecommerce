<script setup>

</script>

<template>
  <header :class="$style.header">
    <figure>
      <img
        :class="$style.header__logo"
        src="../assets/images/dunder-logo.png"
        alt="Dunder Mifflin Logo"
      />
    </figure>
    <div>
      <app-input placeholder="Pesquise produtos na Dunder Mifflin" />
    </div>
  </header>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 12vh;
  background-color: #ebebe3;

  &__logo {
    opacity: 0.02;
    height: 10vh;
  }
}
</style>