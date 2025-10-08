import { auth } from "@/lib/auth/auth"
import { headers } from "next/headers"
import { unauthorized } from "next/navigation"
import { getSession } from "./auth-session";

export async function isAdmin() {
    const session = await getSession();
    return session?.user?.role === "admin";
}