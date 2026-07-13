import { resolve } from 'path'
import { defineConfig } from 'vite'

/**** "slim" build for bundler-based consumers (and the "agadoo" check) ****/

// in contrast to the normal (self-contained) bundle, this build keeps all
// runtime dependencies external - consumers with their own bundler resolve
// (and tree-shake) them themselves. "es2022" keeps private class fields
// native (transpiled WeakMap accesses would not be tree-shakeable)

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      entry: resolve(__dirname, 'src/javascript-code-library.ts'),
      formats: ['es'],
      fileName: () => 'javascript-code-library.slim.esm.js',
    },
    outDir: 'dist',
    emptyOutDir: false,             // keeps the normal build's files in place
    sourcemap: true,
    rollupOptions: {
      external: (id) => (
        id.startsWith('@codemirror/') ||
        [
          'preact', 'preact/compat', 'preact/hooks', 'htm', 'htm/preact',
          'detect-it', 'javascript-interface-library',
          'mammoth', 'pdfjs-dist',
        ].includes(id)
      ),
    },
  },
})
