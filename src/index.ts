import * as dotenv from "dotenv";
dotenv.config();

const env = process.env;

export type GetEnvOptions = Partial<{
  default: string;
}>;

export function getEnv(key: string, options: GetEnvOptions = {}): string {
  const value = env[key] ?? options.default;
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
}
