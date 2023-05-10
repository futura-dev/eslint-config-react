module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'react-hooks',
        '@typescript-eslint'
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
    },
};