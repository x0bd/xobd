import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "xoboid",
  description: "Programmer | Dreamer | Maker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="prose-xl dark:prose-invert mx-auto my-20 w-full max-w-4xl px-4 md:px-0">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
