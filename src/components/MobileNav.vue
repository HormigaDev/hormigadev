<template>
  <button
    @click="toggleMenu"
    class="relative z-[60] p-2 text-tech-secondary hover:text-discord-blurple transition-colors lg:hidden"
    :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
    :aria-expanded="isOpen"
  >
    <svg
      class="w-6 h-6 transition-all duration-300"
      :class="{ 'rotate-90': isOpen }"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        v-if="!isOpen"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
      <path
        v-else
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <nav
      v-if="isOpen"
      class="fixed top-0 right-0 h-screen w-72 max-w-[85vw] bg-tech-dark border-l border-tech-secondary/20 shadow-2xl z-50 flex flex-col lg:hidden"
    >
      <div class="flex-1 overflow-y-auto overscroll-contain px-6 py-6 safe-area-inset-bottom">
        <div class="min-h-full flex flex-col">
          <div class="h-14 flex-shrink-0"></div>
          <div class="flex flex-col gap-1">
            <a
              href="/#engineering"
              @click="closeMenu"
              class="block px-4 py-3 text-base font-mono text-tech-secondary hover:text-discord-blurple hover:bg-tech-darker rounded-lg transition-colors"
              data-i18n="nav.projects"
            >
              Proyectos
            </a>
            <a
              href="/#stack"
              @click="closeMenu"
              class="block px-4 py-3 text-base font-mono text-tech-secondary hover:text-discord-blurple hover:bg-tech-darker rounded-lg transition-colors"
              data-i18n="nav.stack"
            >
              Stack
            </a>
            <a
              href="/docs/"
              @click="closeMenu"
              class="block px-4 py-3 text-base font-mono text-tech-secondary hover:text-discord-blurple hover:bg-tech-darker rounded-lg transition-colors"
              data-i18n="nav.docs"
            >
              Docs
            </a>
          </div>
          <div class="mt-6 pt-6 border-t border-tech-secondary/10">
            <slot name="language-picker"></slot>
          </div>
          <div class="mt-auto pt-8 pb-6 border-t border-tech-secondary/10">
            <p class="text-xs font-mono text-tech-secondary/60 mb-3 px-4">Connect</p>
            <div class="flex flex-col gap-2">
              <a
                href="https://github.com/HormigaDev"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 px-4 py-2 text-sm font-mono text-tech-secondary hover:text-discord-blurple hover:bg-tech-darker rounded-lg transition-colors"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://discord.com/invite/m7cs2EUc8z"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 px-4 py-2 text-sm font-mono text-tech-secondary hover:text-discord-blurple hover:bg-tech-darker rounded-lg transition-colors"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
                  />
                </svg>
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
let overlayElement: HTMLDivElement | null = null;

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

watch(isOpen, (newValue) => {
  if (newValue) {
    overlayElement = document.createElement("div");
    overlayElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 40;
      opacity: 0;
      transition: opacity 300ms;
    `;
    overlayElement.onclick = closeMenu;

    document.body.appendChild(overlayElement);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (overlayElement) {
        overlayElement.style.opacity = "1";
      }
    });
  } else {
    if (overlayElement) {
      overlayElement.style.opacity = "0";
      setTimeout(() => {
        if (overlayElement && overlayElement.parentNode) {
          document.body.removeChild(overlayElement);
          overlayElement = null;
        }
      }, 300);
    }
    document.body.style.overflow = "";
  }
});

function handleEscape(e: KeyboardEvent) {
  if (e.key === "Escape" && isOpen.value) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
  if (overlayElement && overlayElement.parentNode) {
    document.body.removeChild(overlayElement);
  }
  document.body.style.overflow = "";
});
</script>
