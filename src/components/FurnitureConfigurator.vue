<template>
  <div v-if="isOpen">
    <FurnitureConfiguratorFirstStep
      v-if="currentStep === 1"
      :close="closeConfigurator"
      @complete="handleFirstStep($event)"
    />
    <FurnitureConfiguratorSecondStep
      v-else-if="currentStep === 2"
      :close="closeConfigurator"
      :furnitureCategory="selectedFurniture.category"
      @complete="handleSecondStep($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { type FurnitureBase, type FurnitureFullyConfigured } from '@/constants'
import { ref } from 'vue'
import FurnitureConfiguratorFirstStep from './FurnitureConfiguratorFirstStep.vue'
import FurnitureConfiguratorSecondStep from './FurnitureConfiguratorSecondStep.vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
  complete: [configuredFurniture: FurnitureFullyConfigured]
}>()

const currentStep = ref<Step>(1)
const selectedFurniture = ref({} as FurnitureBase)

function handleFirstStep(selectedValue: FurnitureBase) {
  selectedFurniture.value = selectedValue
  goToStep(2)
}

function handleSecondStep(selectedValues: Record<string, string>) {
  const selectedConfiguration = selectedValues
  emit('complete', { ...selectedFurniture.value, ...selectedConfiguration })
  closeConfigurator()
}

function closeConfigurator() {
  emit('close')
  goToStep(1)
}

function goToStep(step: Step) {
  currentStep.value = step
}

type Step = 1 | 2
</script>
