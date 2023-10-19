<template>
  <div
    v-if="isOpen"
    class="fixed z-50 bg-black/20 top-0 left-0 w-full h-full backdrop-blur-sm"
  >
    <div
      class="fixed inset-x-6 top-6 max-w-screen-sm mx-auto bg-white rounded shadow border-primary border-2 p-4"
    >
      <h3 class="text-primary text-lg font-semibold mb-6">
        <slot name="title"> </slot>
      </h3>
      <slot name="content"></slot>
      <slot name="footer"></slot>
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 bg-red-600 rounded py-1 text-sm text-white px-2"
      >
        Zamknij
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'

defineProps<{
  isOpen: boolean
}>()

defineEmits<{
  close: []
}>()

onUpdated(() => {
  console.log('updated modal')
})

onUnmounted(() => {
  console.log('unmounted modal')
})

onMounted(() => {
  console.log('mounted modal')
})
</script>
