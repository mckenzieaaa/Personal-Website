import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 路径： https://mckenzieaaa.github.io/Personal-Website/
  // 设置为根路径，因为部署整个仓库
  base: '/Personal-Website/',
  // 与 GitHub Actions pages.yml 对齐，输出到 dist
  build: {
    outDir: 'dist',
  },
})
