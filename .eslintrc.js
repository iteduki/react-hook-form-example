module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        ".eslintrc.js"
      ],
    "rules": {
    }
}
