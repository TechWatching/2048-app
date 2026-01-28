// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()], // Permet de transformer les fichiers .vue pour le test
  test: {
    environment: 'jsdom', // Simule le DOM pour tester les classes CSS
    globals: true,        // Permet d'utiliser describe/it/expect sans import
  },
})