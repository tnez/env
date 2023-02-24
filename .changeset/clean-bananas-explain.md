---
"@tnezdev/env": minor
---

Allow specification of default value to return if key is not defined in `process.env`

```ts
getEnv("NON_EXISTENT_KEY", { default: "default-value" });
// ? 'default-value'
```
