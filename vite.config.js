import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This tells Vite to listen on all available network interfaces (0.0.0.0)
    // You can also explicitly set the port if you want a specific one, e.g.:
    // port: 5173, // Vite's common default port
  },
})