import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      entry: resolve(__dirname, 'src/javascript-code-library.ts'),
      formats: ['es'],
      fileName: () => 'javascript-code-library.esm.js',
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // "@codemirror/lang-*" are the only lazily-loaded peer libraries
      // imported with a literal specifier (all others go through
      // "loadedLibrary()", whose dynamic specifier Rollup cannot - and
      // should not - resolve at build time anyway): these packages are
      // never installed here, they are hosted separately and resolved
      // through an Import Map at runtime, see "docs/codemirror-bundles.md"
      external: (id) => id.startsWith('@codemirror/'),
      output: {
        // "mammoth" and "pdfjs-dist" are dynamically imported (s.
        // "loadedMammoth"/"loadedPDFjs") and, thus, end up in their own
        // lazily-loaded chunks - name them after their package instead of
        // Rollup's guessed (and rather cryptic) "index"/"pdf"
        manualChunks (id) {
          if (id.includes('/node_modules/mammoth/'))     { return 'mammoth' }
          if (id.includes('/node_modules/pdfjs-dist/'))  { return 'pdfjs-dist' }
        },
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ['src/**/*.test.ts'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(
          'javascript-code-library.esm.d.ts',
          'javascript-code-library.d.ts'
        ),
        content
      })
    }),
    viteStaticCopy({
      // the PDFFileReadAsText/... helpers resolve their worker relative to
      // this bundle's own URL at runtime, so the worker file must ship
      // alongside "javascript-code-library.esm.js" inside "dist/"
      targets: [
        {
          src: 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
          dest: '.',
          rename: { stripBase: true },
        },
      ],
    }),
  ],
})
