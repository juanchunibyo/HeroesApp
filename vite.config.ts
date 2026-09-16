import path from "path"
import tailwindcss from "@tailwindcss/vite"


import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss(), reactCompilerPreset],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
