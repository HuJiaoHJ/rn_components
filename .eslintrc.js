module.exports = {
    parser: 'babel-eslint',
    extends: ['react-app'],
    plugins: ['react', 'flowtype', 'jsx-a11y', 'import'],
    rules: {
        // 【error】使用单引号
        quotes: ['error', 'single'],
        // 句末不加分号
        semi: ['error', 'never'],
        // 【warn】禁止未使用过的变量
        'no-unused-vars': [
            'warn',
            {
              vars: 'all',
              args: 'none',
            },
        ],
    }
}