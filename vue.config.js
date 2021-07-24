/**
 * Settings for vue
 * @type { import('@vue/cli-service').ProjectOptions }
 */
module.exports = {
    publicPath: '/',
    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: true
        }
    },
    transpileDependencies: [
        'vuex-module-decorators'
    ],
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vueVendor: {
                        test: /[\\/]node_modules[\\/](vue)[\\/]/,
                        name: 'vue-vendor',
                        enforce: true
                    },
                    vuexVendor: {
                        test: /[\\/]node_modules[\\/](vuex)[\\/]/,
                        name: 'vuex-vendor',
                        enforce: true
                    },
                    vueRouterVendor: {
                        test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
                        name: 'vue-router-vendor',
                        enforce: true
                    },
                    vueUtilsVendor: {
                        test: /[\\/]node_modules[\\/](vue-property-decorator|vue-class-component|vue-lazyload)[\\/]/,
                        name: 'vue-utils-vendor',
                        enforce: true
                    },
                    vueSwiperVendor: {
                        test: /[\\/]node_modules[\\/](vue-awesome-swiper)[\\/]/,
                        name: 'vue-awesome-swiper-vendor',
                        enforce: true
                    },
                    // swiperOtherVendor: {
                    //     test: ({ resource }) => {
                    //         if (/[\\/]node_modules[\\/]swiper[\\/]esm[\\/]components[\\/](effect-\w+|history)[\\/]/.test(resource)) {
                    //             console.log(true)
                    //             return true
                    //         }
                    //     },
                    //     name: 'swiper-other-vendor',
                    //     enforce: true,
                    // },
                    swiperCoreVendor: {
                        test: /[\\/]node_modules[\\/]swiper[\\/]esm[\\/]components[\\/]core[\\/]/,
                        name: 'swiper-core-vendor',
                        enforce: true,
                    },
                    swiperOtherVendor: {
                        test: /[\\/]node_modules[\\/]swiper[\\/]esm[\\/]components[\\/](?!core)[\\/]/,
                        name: 'swiper-other-vendor',
                        enforce: true,
                    },
                    swiperEsmVendor: {
                        test: /[\\/]node_modules[\\/]swiper[\\/]esm[\\/](?!components|utils)/,
                        name: 'swiper-esm-vendor',
                        enforce: true,
                    },
                    swiperUtilsVendor: {
                        test: /[\\/]node_modules[\\/]swiper[\\/]esm[\\/]utils[\\/]/,
                        name: 'swiper-utils-vendor',
                        enforce: true
                    },
                    swiperVendor: {
                        test: /[\\/]node_modules[\\/]swiper[\\/](?!esm)[\\/]/,
                        name: 'swiper-vendor',
                        enforce: true
                    },
                    es6Vendor: {
                        test: /[\\/]node_modules[\\/](es6-promise)[\\/]/,
                        name: 'es6-vendor',
                        enforce: true
                    },
                    // debugVendor: {
                    //     test: (module) => {
                    //         if (/[\\/]swiper[\\/]esm[\\/]components[\\/]/.test(module.resource)) {
                    //             console.log('module name ->', module.resource)
                    //             return true
                    //         }
                    //         return false
                    //     },
                    //     name: 'debug-vendor'
                    // },
                }
            }
        }
    }
}
