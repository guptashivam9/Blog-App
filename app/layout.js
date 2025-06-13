import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Personal Blog",
  description: "A simple personal blog built with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600  ">
                Personal Blog
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                  Home
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </body>
    </html>
  )
}
