# Shared Javascript Configuration

Configuration files including:
- TypeScript: `tsconfig.json`
- ESLint: `.eslintrc.js`
- Jest: `jest.config.js`

## How to use

1. Add this package inside `package.json`

    ```json
    {
        "dependencies": {
            "@bitgaming/reinv-js-config": "git+ssh://git@github.com:bitgaming/reinv-js-config.git#semver:^0.3.0",
        }
    }
    ```

    > semver is the same as git tag of this repo

2. Extend local config files in your repo

    #### Example `.eslintrc.js`

    ```javascript
    module.exports = {
        "parserOptions": {
            "ecmaVersion": 6,
        },
        ...require('@bitgaming/reinv-js-config/cdk/eslintrc'),
    }
    ```

    #### Example `tsconfig.json`

    ```json
    {
        "extends": "@bitgaming/reinv-js-config/cdk/.tsconfig",
        "exclude": [
            "cdk.out"
        ]
    }
    ```

## Contribute

### Test

This repo itself uses `eslint` as well. Run `yarn test` to test the linting.

### Before commit to this repo

Make sure git tag is consistent with `version` in `package.json`
