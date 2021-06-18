module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "no-unused-vars": "off",
        // "no-fallthrough": "off",
        "react/prop-types": "off",
        // "react/jsx-key": "off",
        // "react/jsx-no-duplicate-props": "off",
    }
};
