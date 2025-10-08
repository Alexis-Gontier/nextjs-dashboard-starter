import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import { Providers } from "@/app/providers";

import { Toaster } from "@/components/shadcn-ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster
            position="top-center"
            richColors
          />
        </Providers>
      </body>
    </html>
  );
}
