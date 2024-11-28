<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number]
  },
  required: Boolean,
  inputId: [String, Number],
  placeholder: [String, Number]
})
</script>

<template>
  <div>
    <app-label
      v-if="label"
      :label="label"
      :required="required"
      :inputId="inputId"
    />
    <input
      :type="type"
      :value="value"
      :id="inputId"
      :required="required"
      :model:value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss" module>
</style>