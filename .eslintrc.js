module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "commonjs": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb", "airbnb/hooks"] ,
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-filename-extension': [1, {
          "extensions": [".js", ".jsx"]
        }],
        'quotes': ['error', 'single', {
          'allowTemplateLiterals': true
        }],
        'semi': ['off', 'always'],
        "import/no-unresolved": "off",
        "react/prop-types": [2, { ignore: ['children', 'style'] }],
    }
};