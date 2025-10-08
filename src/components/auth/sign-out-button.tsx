"use client"

import { Button } from "@/components/shadcn-ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "@/actions/auth-action"

export default function SignOutButton() {

  async function handleSignOut() {
    await signOut()
  }

  return (
    <Button
      variant="destructive"
      onClick={handleSignOut}
      className="w-full cursor-pointer"
    >
        <LogOut />
        Sign out
    </Button>
  )
}

