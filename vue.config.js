module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/instagramy/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
