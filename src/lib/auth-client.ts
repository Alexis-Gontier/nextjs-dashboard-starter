import { createAuthClient } from "better-auth/react"
import { ENV } from "@/lib/env"

export const authClient = createAuthClient({
    baseURL: ENV.NEXT_PUBLIC_APP_URL,
})