import dev from '../index'

export default {
  input: './foo.js',
  output: { file: './bar.js', format: 'esm' },
  plugins: [
    dev({
      spa: true,
      proxy: {
        '/v3/*': ['https://polyfill.io/', { https: true, filter: (ctx) => ctx.method === 'GET' }]
      }
    })
  ]
}
