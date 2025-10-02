type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  )
}
