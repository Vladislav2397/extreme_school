const { themes } = require('@storybook/theming')

module.exports.parameters = {
    docs: {
        theme: themes.dark
    }
}

module.exports = {
    "stories": [
        "./**/*.stories.@(js|ts)",
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
        "@storybook/addon-actions",
        "@storybook/addon-controls"
    ],
    // addParameters: {
    //     docs: {
    //         theme: themes.dark
    //     }
    // },
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.pug$/,
            use: [
                'pug-plain-loader'
            ]
        })
        return config
    }
}
