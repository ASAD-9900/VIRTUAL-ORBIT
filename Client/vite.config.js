import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';


export default defineConfig({
  plugins: [
    tailwindcss(),],
     resolve: {
    alias: {
      'next/image': '/src/next-image-shim.js',
    },
  },
})