# @tnezdev/env

## 0.2.0

### Minor Changes

- be08577: Add an option to throw if attempting to access an environment variable in the **client** that should only be accessed **server-side**.

  Example:

  ```js
  /**
   * The following will throw an exception if run in the client.
   */
  const SECRET_API_KEY = getEnv("SECRET_API_KEY", { serverOnly: true });
  ```

## 0.1.0

### Minor Changes

- 5e98a13: Allow specification of default value to return if key is not defined in `process.env`

  ```ts
  getEnv("NON_EXISTENT_KEY", { default: "default-value" });
  // ? 'default-value'
  ```

## 0.0.1

### Patch Changes

- 4280cda: fix(ci): issue with publish workflow
- c38944d: chore(ci): add workflow to publish package
