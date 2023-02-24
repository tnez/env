import * as dotenv from "dotenv";
dotenv.config();

const env = process.env;

export function getEnv(key: string): string {
  const value = env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
}
