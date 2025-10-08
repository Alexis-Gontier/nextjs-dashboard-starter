import { createAuthClient } from "better-auth/react"
import {
    adminClient,
    usernameClient
} from "better-auth/client/plugins"
import { ENV } from "@/lib/env"

export const authClient = createAuthClient({
    baseURL: ENV.NEXT_PUBLIC_BASE_URL,
    plugins: [
        adminClient(),
        usernameClient(),
    ]
})