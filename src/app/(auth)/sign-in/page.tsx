import { SignInForm } from '@/components/auth/sign-in-with-email-form'
import SignInWithGitHubButton from '@/components/auth/sign-in-with-github-button'
import { Separator } from '@/components/shadcn-ui/separator'

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <SignInForm />
      <Separator />
      <SignInWithGitHubButton />
    </div>
  )
}
