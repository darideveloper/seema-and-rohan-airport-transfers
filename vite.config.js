import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/seema-and-rohan-airport-transfers/',
  build: {
    emptyOutDir: false,
  },
})
