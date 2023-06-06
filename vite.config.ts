import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3000
  },
  plugins: [
    react(),
    eslint(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })
  ],
  resolve: {
    alias: [{
      find: 'src/',
      replacement: '/src/'
    }]
  }
})
