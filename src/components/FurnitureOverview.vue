<template>
  <pre class="mt-12">{{ furniture }}</pre>
</template>

<script setup lang="ts">
import type { FurnitureFullyConfigured } from '@/views/HomeView.vue'

defineProps<{
  furniture?: FurnitureFullyConfigured
}>()
</script>
