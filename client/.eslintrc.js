module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'no-use-before-define': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'react-in-jsx-scope': 0,
        'react/react-in-jsx-scope': 0,
        'jsx-filename-extension': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/no-var-requires': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    },
    settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          alias: {
            map: [
              ['@', './src'],
              ['@routes', './src/routes'],
              ['@queries', './src/queries'],
              ['@type', './src/types']
            ],
          },
        },
      },
}