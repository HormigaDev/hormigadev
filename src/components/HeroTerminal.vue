<template>
  <div
    class="w-full max-w-2xl mx-auto rounded-lg border border-tech-secondary/20 bg-tech-darker shadow-2xl overflow-hidden"
    @click="focusInput"
  >
    <div
      class="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-tech-dark border-b border-tech-secondary/10"
    >
      <div class="flex items-center gap-1.5 sm:gap-2">
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></span>
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></span>
        <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></span>
        <span class="ml-2 sm:ml-3 text-[10px] sm:text-xs font-mono text-tech-secondary/60"
          >hormigadev@vps:~</span
        >
      </div>
      <button
        v-if="interactive"
        @click.stop="resetTerminal"
        class="text-[10px] sm:text-xs font-mono text-tech-secondary/60 hover:text-discord-blurple transition-colors px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:bg-tech-darker/50"
        title="Limpiar terminal"
      >
        clear
      </button>
    </div>
    <div
      class="p-3 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[180px] sm:min-h-[240px]"
    >
      <div v-for="(line, i) in visibleLines" :key="i">
        <div v-if="line.type === 'command'" class="flex gap-1.5 sm:gap-2">
          <span class="text-vue-green select-none">❯</span>
          <span class="text-discord-blurple break-all">{{ line.text }}</span>
          <span
            v-if="i === visibleLines.length - 1 && isTyping"
            class="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-discord-blurple animate-pulse"
          ></span>
        </div>
        <div v-else class="text-tech-secondary pl-4 sm:pl-5 break-words" v-html="line.text"></div>
      </div>
      <div v-if="interactive" class="flex gap-1.5 sm:gap-2 mt-1">
        <span class="text-vue-green select-none">❯</span>
        <input
          ref="terminalInput"
          v-model="currentInput"
          @keydown.enter="executeCommand"
          class="flex-1 bg-transparent outline-none text-discord-blurple caret-discord-blurple text-xs sm:text-sm"
          type="text"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
      <div v-else-if="done && !interactive" class="flex gap-1.5 sm:gap-2 mt-1">
        <span class="text-vue-green select-none">❯</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { ui } from "../i18n/ui";

interface TerminalLine {
  type: "command" | "output";
  text: string;
}

const visibleLines = ref<TerminalLine[]>([]);
const isTyping = ref(false);
const done = ref(false);
const interactive = ref(false);
const currentInput = ref("");
const terminalInput = ref<HTMLInputElement | null>(null);
const easterEggIndex = ref(0);
const currentLang = ref<"es" | "en" | "pt">("es");

onMounted(() => {
  const lang = localStorage.getItem("preferredLang") || navigator.language.split("-")[0] || "es";
  currentLang.value = ["es", "en", "pt"].includes(lang) ? (lang as "es" | "en" | "pt") : "es";

  window.addEventListener("languagechange", (event: any) => {
    currentLang.value = event.detail.lang;
    resetTerminal();
  });

  runAnimation();
});

const statusText = computed(() => ui[currentLang.value]["hero.status"]);
const easterEggs = computed(() => [
  ui[currentLang.value]["terminal.egg.0"],
  ui[currentLang.value]["terminal.egg.1"],
  ui[currentLang.value]["terminal.egg.2"],
  ui[currentLang.value]["terminal.egg.3"],
]);

const sequence = computed(() => [
  { command: "whoami", output: "HormigaDev" },
  { command: "current_status", output: statusText.value },
  { command: "ls ./skills", output: "[Rust, TypeScript, Systemd, Linux]" },
]);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeCommand(text: string): Promise<void> {
  isTyping.value = true;
  visibleLines.value.push({ type: "command", text: "" });
  const idx = visibleLines.value.length - 1;

  for (const char of text) {
    visibleLines.value[idx] = {
      type: "command",
      text: visibleLines.value[idx].text + char,
    };
    await sleep(48);
  }

  isTyping.value = false;
}

async function showOutput(text: string): Promise<void> {
  visibleLines.value.push({ type: "output", text });
  await sleep(250);
}

async function runAnimation(): Promise<void> {
  await sleep(400);

  for (const entry of sequence.value) {
    await typeCommand(entry.command);
    await sleep(180);
    await showOutput(entry.output);
    await sleep(300);
  }

  done.value = true;
  await sleep(800);
  interactive.value = true;

  await nextTick();
  focusInput();
}

function executeCommand(): void {
  const cmd = currentInput.value.trim();
  if (!cmd) return;

  visibleLines.value.push({ type: "command", text: cmd });

  const message = easterEggs.value[easterEggIndex.value];
  easterEggIndex.value = (easterEggIndex.value + 1) % easterEggs.value.length;

  visibleLines.value.push({ type: "output", text: message });

  currentInput.value = "";
}

function resetTerminal(): void {
  visibleLines.value = [];
  isTyping.value = false;
  done.value = false;
  interactive.value = false;
  currentInput.value = "";
  easterEggIndex.value = 0;

  runAnimation();
}

function focusInput(): void {
  if (interactive.value && terminalInput.value) {
    terminalInput.value.focus();
  }
}
</script>
