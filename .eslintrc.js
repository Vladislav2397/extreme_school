module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/html-closing-bracket-spacing': 'warn',
        'vue/mustache-interpolation-spacing': 'warn',
          semi: ['warn', 'never'],
          quotes: ['warn', 'single'],
          indent: ['error', 4]
    },
    overrides: [
        {
            files: [
                  '**/__tests__/*.{j,t}s?(x)',
                  '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
