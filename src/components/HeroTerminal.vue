<template>
  <div
    class="w-full max-w-2xl mx-auto rounded-lg border border-tech-secondary/20 bg-tech-darker shadow-2xl overflow-hidden"
    @click="focusInput"
  >
    <div
      class="flex items-center justify-between px-4 py-2.5 bg-tech-dark border-b border-tech-secondary/10"
    >
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
        <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
        <span class="ml-3 text-xs font-mono text-tech-secondary/60">hormigadev@vps:~</span>
      </div>
      <button
        v-if="interactive"
        @click.stop="resetTerminal"
        class="text-xs font-mono text-tech-secondary/60 hover:text-discord-blurple transition-colors px-2 py-1 rounded hover:bg-tech-darker/50"
        title="Limpiar terminal"
      >
        clear
      </button>
    </div>
    <div class="p-5 font-mono text-sm leading-relaxed min-h-[240px]">
      <div v-for="(line, i) in visibleLines" :key="i">
        <div v-if="line.type === 'command'" class="flex gap-2">
          <span class="text-vue-green select-none">❯</span>
          <span class="text-discord-blurple">{{ line.text }}</span>
          <span
            v-if="i === visibleLines.length - 1 && isTyping"
            class="inline-block w-2 h-4 bg-discord-blurple animate-pulse"
          ></span>
        </div>
        <div v-else class="text-tech-secondary pl-5" v-html="line.text"></div>
      </div>
      <div v-if="interactive" class="flex gap-2 mt-1">
        <span class="text-vue-green select-none">❯</span>
        <input
          ref="terminalInput"
          v-model="currentInput"
          @keydown.enter="executeCommand"
          class="flex-1 bg-transparent outline-none text-discord-blurple caret-discord-blurple"
          type="text"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
      <div v-else-if="done && !interactive" class="flex gap-2 mt-1">
        <span class="text-vue-green select-none">❯</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const props = defineProps<{
  statusText: string;
  easterEggs: string[];
}>();

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

const sequence: { command: string; output: string }[] = [
  { command: "whoami", output: "HormigaDev" },
  { command: "current_status", output: props.statusText },
  { command: "ls ./skills", output: "[Rust, TypeScript, Systemd, Linux]" },
];

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

  for (const entry of sequence) {
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

  const message = props.easterEggs[easterEggIndex.value];
  easterEggIndex.value = (easterEggIndex.value + 1) % props.easterEggs.length;

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

onMounted(() => {
  runAnimation();
});
</script>
