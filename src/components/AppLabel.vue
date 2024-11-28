<script setup>
const props = defineProps({
  label: String,
  inputId: String,
})
</script>

<template>
  <label
    :for="inputId"
  >{{ label }}</label>
</template>

<style lang="scss" module>
</style>