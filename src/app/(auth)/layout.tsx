type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen max-w-md mx-auto flex flex-col justify-center p-4">
            {children}
        </div>
    )
}