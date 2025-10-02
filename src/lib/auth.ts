import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { openAPI } from "better-auth/plugins";
import { ENV } from "@/lib/env";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite",
    }),
    appName: "nextjs-dashboard-starter",
    trustedOrigins: [
        ENV.NEXT_PUBLIC_APP_URL
    ],
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        minPasswordLength: 8,
        maxPasswordLength: 128,
        disableSignUp: false,
        autoSignIn: false,
    },
    plugins: [
        openAPI(),
        nextCookies() // make sure this is the last plugin in the array
    ],
});