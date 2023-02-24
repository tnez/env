# @tnezdev/env

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
