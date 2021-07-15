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
                    vueVendor: {
                        test: /[\\/]node_modules[\\/](vue)[\\/]/,
                        name: 'vue-vendor'
                    },
                    vueRouterVendor: {
                        test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
                        name: 'vue-router-vendor'
                    },
                    vueVuexVendor: {
                        test: /[\\/]node_modules[\\/](vuex)[\\/]/,
                        name: 'vue-vuex-vendor'
                    },
                    vueClassComponentVendor: {
                        test: /[\\/]node_modules[\\/](vue-class-component)[\\/]/,
                        name: 'vue-class-component-vendor'
                    },
                    vueAwesomeSwiperVendor: {
                        test: /[\\/]node_modules[\\/](vue-awesome-swiper)[\\/]/,
                        name: 'vue-awesome-swiper-vendor'
                    },
                    vendor: {
                        test: /[\\/]node_modules[\\/].*[\\/]/,
                        name: 'vendor'
                    }
                }
            }
        }
    }
}
