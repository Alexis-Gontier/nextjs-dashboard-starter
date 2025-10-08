import SignOutButton from "@/components/auth/sign-out-button"
import { requireUser } from "@/lib/auth/auth-session"

export default async function Page() {

  const user = await requireUser()

  return (
    <div className="p-8 space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <SignOutButton />
    </div>
  )
}
