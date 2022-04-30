<template>
  <div>
    <h1 font="display" text="true-gray-400">{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: String
}>()
</script>
