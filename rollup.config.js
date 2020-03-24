import vue from 'rollup-plugin-vue'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/main.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js'
    },
    plugins: [
      vue()
    ]
  },
  // SSR build.
  {
    input: 'src/main.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js'
    },
    plugins: [
      vue({ template: { optimizeSSR: true } })
    ]
  },
  // Browser build.
  {
    input: 'src/main.js',
    output: {
      format: 'iife',
      file: 'dist/library.js'
    },
    plugins: [
      vue()
    ]
  }
]