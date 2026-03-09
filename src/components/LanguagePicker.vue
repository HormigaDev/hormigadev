<template>
  <div class="relative inline-block">
    <button
      @click="open = !open"
      class="flex items-center gap-2 px-3 py-1.5 rounded border border-tech-secondary/30 bg-tech-darker text-tech-secondary text-sm font-mono hover:border-discord-blurple hover:text-discord-blurple transition-colors cursor-pointer"
    >
      <span>{{ languages[currentLang] || currentLang }}</span>
      <svg
        class="w-3.5 h-3.5 transition-transform"
        :class="{ 'rotate-180': open }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-if="open"
      class="absolute right-0 mt-1 w-36 rounded border border-tech-secondary/20 bg-tech-darker shadow-lg z-50 overflow-hidden"
    >
      <a
        v-for="(label, code) in languages"
        :key="code"
        :href="`/${code}/`"
        class="block px-4 py-2 text-sm font-mono transition-colors"
        :class="
          code === currentLang
            ? 'text-discord-blurple bg-tech-dark'
            : 'text-tech-secondary hover:text-discord-blurple hover:bg-tech-dark'
        "
      >
        {{ label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  currentLang: string;
}>();

const languages: Record<string, string> = {
  es: "🇪🇸 Español",
  en: "🇺🇸 English",
  pt: "🇧🇷 Português",
};

const open = ref(false);
</script>
