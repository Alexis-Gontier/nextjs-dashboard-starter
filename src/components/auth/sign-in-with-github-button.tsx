"use client"

import { Button } from "@/components/shadcn-ui/button"
import { Github } from "lucide-react"
import { signInWithGitHub } from "@/server/auth-action"

export default function SignInWithGitHubButton() {

  async function handleSignIn() {
    await signInWithGitHub()
  }

  return (
    <Button
      variant="outline"
      onClick={handleSignIn}
      className="w-full cursor-pointer"
    >
      <Github />
      Sign in with GitHub
    </Button>
  )
}

