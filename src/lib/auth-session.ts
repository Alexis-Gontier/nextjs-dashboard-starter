import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { cache } from "react"
import { unauthorized } from "next/navigation"

export const getSession = cache(async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session
})

export const getUser = cache(async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session?.user
})

export async function requireUser() {
    const session = await getSession()
    if (!session) {
        unauthorized()
    }
    return session?.user
}