import babel          from '@rollup/plugin-babel'
import commonjs       from '@rollup/plugin-commonjs'
import json           from '@rollup/plugin-json'
import nodeResolve    from '@rollup/plugin-node-resolve'
import { decoPhrase } from '@spare/deco-string'
import { decoObject } from '@spare/logger'
// import fileInfo       from 'rollup-plugin-fileinfo'

const { name, dependencies, main, module } = require(process.cwd() + '/package.json')

console.log('Executing', name, decoPhrase(process.cwd(), { delim: '/' }))
console.log('Dependencies', decoObject(dependencies || {}))

const babelPluginOptions = {
  babelrc: false,
  comments: true,
  sourceMap: true,
  exclude: 'node_modules/**',
  babelHelpers:'bundled',
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/transform-runtime', { helpers: false }]
  ]
}

export default [
  {
    input: 'index.js',
    external: Object.keys(dependencies || {}),
    output: [
      { file: main, format: 'cjs' },  // CommonJS (for Node) build.
      { file: module, format: 'esm' }  // ES module (for bundlers) build.
    ],
    plugins: [
      nodeResolve({
        preferBuiltins: true
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel(babelPluginOptions),
      json(),
      // fileInfo(),
    ]
  }
]
