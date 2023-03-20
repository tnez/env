---
"@tnezdev/env": minor
---

Add an option to throw if attempting to access an environment variable in the **client** that should only be accessed **server-side**.

Example:

```js
/**
 * The following will throw an exception if run in the client.
 */
 const SECRET_API_KEY = getEnv('SECRET_API_KEY', { serverOnly: true })
```
