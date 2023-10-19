<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center text-4xl mb-6">Konfigurator mebli</h1>
    <button
      @click="openConfigurator"
      class="text-lg bg-primary text-white px-6 py-1"
    >
      Otwórz konfigurator
    </button>
    <FurnitureConfigurator
      :isOpen="isConfiguratorOpen"
      @close="closeConfigurator"
      @complete="handleCompleteConfiguring($event)"
    />
    <FurnitureOverview :furniture="configuredFurniture" />
  </div>
</template>

<script setup lang="ts">
import FurnitureConfigurator from '@/components/FurnitureConfigurator.vue'
import FurnitureOverview from '@/components/FurnitureOverview.vue'
import type { FurnitureFullyConfigured } from '@/constants'
import { ref } from 'vue'

const isConfiguratorOpen = ref(false)
const configuredFurniture = ref<FurnitureFullyConfigured>()

function openConfigurator() {
  isConfiguratorOpen.value = true
}

function closeConfigurator() {
  isConfiguratorOpen.value = false
}

function handleCompleteConfiguring(furniture: FurnitureFullyConfigured) {
  configuredFurniture.value = furniture
}
</script>
