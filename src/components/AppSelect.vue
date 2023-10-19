<template>
  <div class="flex flex-col gap-2">
    <label class="font-semibold">{{ label }}</label>
    <select
      :value="modelValue"
      @change="onOptionChange"
      class="bg-gray-100 rounded p-1"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
  options: string[]
}>()

const emit = defineEmits<{
  select: [selected: string]
}>()

function onOptionChange(e: Event) {
  const selectedOption = (e.target as HTMLSelectElement).value
  emit('select', selectedOption)
}
</script>
