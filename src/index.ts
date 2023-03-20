import * as dotenv from "dotenv";
dotenv.config();

const env = process.env;

export type GetEnvOptions = Partial<{
  default: string;
  /**
   * Specify whether you want to throw if executed in a client environment.
   * @default false
   */
  serverOnly: boolean;
}>;

export function getEnv(key: string, options: GetEnvOptions = {}): string {
  if (options.serverOnly) {
    throwIfClientContext(key);
  }

  const value = env[key] ?? options.default;
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
}

function throwIfClientContext(key: string) {
  if (typeof window == "object") {
    throw new Error(
      `Attempted to access server-only variable ${key} in client context`
    );
  }
}
