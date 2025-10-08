import { auth } from "@/lib/auth/auth"
import { headers } from "next/headers"
import { unauthorized } from "next/navigation"

export const getSession = async () => {
    return await auth.api.getSession({
        headers: await headers()
    })
}

export const getUser = async () => {
    const session = await getSession()
    return session?.user ?? null
}

export const requireUser = async () => {
    const user = await getUser()
    if (!user) unauthorized()
    return user
}

