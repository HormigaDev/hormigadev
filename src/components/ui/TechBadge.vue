<template>
  <span
    class="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wide border"
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
