import webpack from 'webpack'
import webpackConfig from './webpack.config.js' // <-- Contains ES6+

console.log(webpackConfig)

webpack(webpackConfig, (err, stats) => {
  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }
  console.log('done')
})
