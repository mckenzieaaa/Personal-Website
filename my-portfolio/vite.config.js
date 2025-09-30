import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 路径： https://mckenzieaaa.github.io/Personal-Website/
  // 需要设置 base 为仓库名，确保构建后的静态资源路径正确
  base: '/Personal-Website/',
  // 与 GitHub Actions pages.yml 对齐，输出到 dist
  build: {
    outDir: 'dist',
  },
})
