import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  injectStyle: true,
  external: ['react', 'react-dom']
})
