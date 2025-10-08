import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db/prisma";
import {
    openAPI,
    admin,
    username,
} from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { ENV } from "@/lib/utils/env";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        disableSignUp: false,
        autoSignInAfterSignUp: true,
        minPasswordLength: 6,
        maxPasswordLength: 128,
    },
    socialProviders: {
        github: {
            enabled: true,
            clientId: ENV.GITHUB_CLIENT_ID,
            clientSecret: ENV.GITHUB_CLIENT_SECRET,
        },
    },
    plugins: [
        openAPI(),
        admin(),
        username({
            minUsernameLength: 3,
            maxUsernameLength: 100
        }),
        nextCookies() // make sure this is the last plugin in the array
    ]
});