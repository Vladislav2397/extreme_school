/**
 * Settings for vue
 * @type { import('@vue/cli-service').ProjectOptions }
 */
module.exports = {
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: true
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/extreme_school/'
        : '/',
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    debugVendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor'
                    },
                    // vueVuexVendor: {
                    //     test: /[\\/]node_modules[\\/](vue|vuex|vue-router)[\\/]/,
                    //     name: 'vue-vuex-vendor',
                    //     enforce: true
                    // },
                    // vueUtilsVendor: {
                    //     test: /[\\/]node_modules[\\/](vue-property-decorator|vue-class-component|vue-lazyload)[\\/]/,
                    //     name: 'vue-utils-vendor',
                    //     enforce: true
                    // },
                    // vueSwiperVendor: {
                    //     test: /[\\/]node_modules[\\/](vue-awesome-swiper)[\\/]/,
                    //     name: 'vue-awesome-swiper-vendor',
                    //     enforce: true
                    // },
                    // swiperVendor: {
                    //     test: /[\\/]node_modules[\\/](swiper)[\\/]/,
                    //     name: 'swiper-vendor',
                    //     enforce: true
                    // },
                    // utilsVendor: {
                    //     test: /[\\/]node_modules[\\/](es6-promise|vue-class-component|vue-lazyload)[\\/]/,
                    //     name: 'utils-vendor',
                    //     enforce: true
                    // }
                }
            }
        }
    }
}
