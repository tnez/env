# @tnezdev/env

A wrapper to make dealing with environment variables less painful.

## Installation

- npm: `npm install @tnezdev/env`
- yarn: `yarn add @tnezdev/env`
- pnpm: `pnpm add @tnezdev/env`

## Usage

Require this in any file where you need to reference an environment variable. It will throw if the expected key is not defined, otherwise it will return a string.

```ts
import { getEnv } from "@tnezdev/env";
import SomeClient from "./clients/some-client";

const configureDefaultClient = () =>
  new SomeClient({
    username: getEnv("SOME_CLIENT_USERNAME"),
    password: getEnv("SOME_CLIENT_PASSWORD"),
  });

export default function (client = configureDefaultClient()) {
  // ... do something cool ...
}
```
