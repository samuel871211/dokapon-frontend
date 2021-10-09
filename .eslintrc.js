module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json']
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'warn', {
                'vars': 'all', // check all global vars that should be used
                'args': 'none', // don't check function args
                'ignoreRestSiblings': false
            }
        ],
        '@typescript-eslint/quotes': [
            'error', 'single', { 'allowTemplateLiterals' : true }
        ]
    }
}