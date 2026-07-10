import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
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
