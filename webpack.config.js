import path from 'path'
import webpack from 'webpack'

const config = {
  plugins: [
    // Webpack 5 no longer polyfills 'process'
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  resolve: {
    fallback: {
      // BREAKING CHANGE: webpack < 5 used to include polyfills for
      // node.js core modules by default. This is no longer the
      // case.
      assert: false,
      util: false
    }
  }
}

export default [
  {
    ...config,
    mode: 'development',
    // entry: './src/browser-simple.js',
    entry: './src/browser.js',
    experiments: {
      outputModule: true
    },
    output: {
      path: path.resolve('dist'),
      filename: 'fpt.js',
      library: {
        // do not specify a `name` here
        type: 'module'
      }
    }
  }
]
