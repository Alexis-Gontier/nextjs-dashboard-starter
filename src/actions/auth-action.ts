"use server"

import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

import {
    signInWithUsernameSchema,
    SignInWithUsernameType,
    signInWithEmailSchema,
    SignInWithEmailType,
    signUpSchema,
    SignUpType,
} from "@/schemas/auth-schema"

export const signInWithGitHub = async () => {
    const res = await auth.api.signInSocial({
        body: {
            provider: "github",
            callbackURL: "/",
        },
    })
    if (res.url) {
        redirect(res.url)
    }
}

export const signUpWithEmail = async (data: SignUpType) => {

    const parsedData = signUpSchema.parse(data)

    const res = await auth.api.signUpEmail({
        body: {
            username: parsedData.username,
            name: parsedData.name,
            email: parsedData.email,
            password: parsedData.password,
        }
    })
}

export const signInWithEmail = async (data: SignInWithEmailType) => {
    const parsedData = signInWithEmailSchema.parse(data)

    const res = await auth.api.signInEmail({
        body: {
            email: parsedData.email,
            password: parsedData.password,
        }
    })
}

export const signInWithUsername = async (data: SignInWithUsernameType) => {
    const parsedData = signInWithUsernameSchema.parse(data)

    const res = await auth.api.signInUsername({
        body: {
            username: parsedData.username,
            password: parsedData.password,
        }
    })
}

export const signOut = async () => {
    await auth.api.signOut({
        headers: await headers()
    })
    redirect("/sign-in")
}