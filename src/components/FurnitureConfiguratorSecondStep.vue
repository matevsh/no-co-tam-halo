<template>
  <AppModal
    :isOpen="true"
    @close="close"
  >
    <template #title> Krok 2: Konfiguracja </template>
    <template #content>
      <div class="space-y-4 mb-6">
        <AppSelect
          v-for="(configuration, name) in availableConfigurations[furnitureCategory]"
          :key="name"
          v-model="selectedConfiguration[name]"
          @select="handleOptionChange(name, $event)"
          :label="configuration.label"
          :options="configuration.options"
        />
      </div>
    </template>
    <template #footer>
      <button
        @click="$emit('complete', selectedConfiguration)"
        class="bg-primary rounded py-1 text-sm text-white px-2"
      >
        Akceptuj
      </button>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import AppSelect from '@/components/AppSelect.vue'
import { availableConfigurations } from '@/constants'
import { ref } from 'vue'

const props = defineProps<{
  close: () => void
  furnitureCategory: string
}>()

defineEmits<{
  complete: [configuration: Record<string, string>]
}>()

const selectedConfiguration = ref<Record<string, string>>({})

for (const key in availableConfigurations[props.furnitureCategory]) {
  selectedConfiguration.value[key] =
    availableConfigurations[props.furnitureCategory][key].options[0]
}

function handleOptionChange(option: string, newValue: string) {
  if (selectedConfiguration.value) selectedConfiguration.value[option] = newValue
}
</script>
