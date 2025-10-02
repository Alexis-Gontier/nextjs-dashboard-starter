import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { unauthorized } from "next/navigation"

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        unauthorized()
    }
    return (
        <div>
            <p>Hi, {session.user.email}.</p>
        </div>
    )
}
