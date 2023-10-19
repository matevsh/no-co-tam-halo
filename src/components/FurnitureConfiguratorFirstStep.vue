<template>
  <AppModal
    :isOpen="true"
    @close="close"
  >
    <template #title>Krok 1: Wybierz mebel </template>
    <template #content>
      <ul class="space-y-2">
        <li
          v-for="furniture in availableFurniture"
          :key="furniture.id"
          @click="$emit('complete', furniture)"
          class="bg-gray-100 rounded p-1 cursor-pointer hover:bg-primary-100"
        >
          {{ furniture.name }}
        </li>
      </ul>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import { availableFurniture, type FurnitureBase } from '@/constants'

defineProps<{
  close: () => void
}>()

defineEmits<{
  complete: [furniture: FurnitureBase]
}>()
</script>
