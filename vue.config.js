module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/a-reading'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
