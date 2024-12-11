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
  placeholder: [String, Number],
  large: Boolean,
  small: Boolean,
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
      :class="$style['app-input']"
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
.app-input {
  --input-height: 32px;

  height: var(--input-height);
  border-radius: 5px;
  border: 1px solid #727272;
}
</style>