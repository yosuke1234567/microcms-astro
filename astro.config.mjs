// @ts-check
import { defineConfig } from 'astro/config'
import postcssPresetEnv from 'postcss-preset-env'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [
          postcssPresetEnv({
            browsers: 'baseline widely available',
          }),
        ],
      },
    },
  },
})
