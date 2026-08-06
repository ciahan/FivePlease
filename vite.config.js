import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Forces a clean local network route instead of localhost loopback
    watch: {
      usePolling: true, // Forces Vite to manually check for file saves on Mac
    },
  },
})