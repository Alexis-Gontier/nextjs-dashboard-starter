import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const ENV = createEnv({
  server: {
    DATABASE_URL: z
      .string()
      .url(),
    GITHUB_CLIENT_ID: z
        .string()
        .min(1),
    GITHUB_CLIENT_SECRET: z
      .string()
      .min(1),
    },
    client: {
      NEXT_PUBLIC_BASE_URL: z
        .string()
        .url(),
    },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }
});