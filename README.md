# Shared Javascript Configuration

Configuration files including:
- TypeScript: `tsconfig.json`. [TS Config Reference](https://www.typescriptlang.org/tsconfig)
- ESLint: `.eslintrc.js`. [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
- Jest: `jest.config.js`. [Jest Configuration](https://jestjs.io/docs/en/configuration)

## How to use

1. Add this package inside `package.json`

    ```json
    {
        "devDependencies": {
            "@bitgaming/reinv-js-config": "git+https://github.com/bitgaming/reinv-js-config.git#semver:^1.4.3",
        }
    }
    ```

    > semver is the same as git tag of this repo

2. Make sure you have resolve all the `peerDependencies`, you can check the warning messages once you have `npm`/`yarn` install

3. Extend local config files in your repo

    #### Example `.eslintrc.js`

    *Replace {category} with the folder of project category*
    ```javascript
    module.exports = require('@bitgaming/reinv-js-config/{category}/eslintrc')(
        {
            "parserOptions": {
                "ecmaVersion": 6,
            },
            "rules": {
                '@typescript-eslint/no-explicit-any': 'off',
            },
        }
    )
    ```

    #### Example `tsconfig.json`

    *Replace {category} with the folder of project category*
    ```json
    {
        "extends": "@bitgaming/reinv-js-config/{category}/.tsconfig",
        "exclude": [
            "cdk.out"
        ]
    }
    ```

4. *(Optional for prettier)* In order to auto-format with `eslint-prettier`, add the following config inside your VSCode preference (JSON):
   ```json
   {
       "[typescript]": {
           "editor.formatOnSave": false,
           "editor.codeActionsOnSave": {
               // For ESLint
               "source.fixAll.eslint": true
           },
       },
       ...
   }
   ```

    This will override the default formatter from VSCode, please make sure you already setup eslint prettier in the project. Application config with prettier:
    - `/serverless/prettier`
    - `/cdk`

## Contribute

### Test

This repo itself uses `eslint` as well. Run `yarn test` to test the linting.

### Before commit to this repo

Make sure git tag is consistent with `version` in `package.json`
