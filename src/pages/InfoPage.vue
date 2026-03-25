<script setup lang="ts">
import PlaceholderPage from '@/components/PlaceholderPage.vue'

defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <PlaceholderPage :eyebrow="eyebrow" :title="title" :description="description" />
</template>
