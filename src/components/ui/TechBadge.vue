<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide border"
    :style="{ borderColor: color, color: color, backgroundColor: color + '1A' }"
  >
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  color: string;
}>();
</script>
