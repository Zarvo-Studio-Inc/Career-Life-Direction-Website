import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Zarvo Studio - Career & Life Direction',
  description: 'Helping students and families make thoughtful career and life decisions through structured guidance, mentorship, and realistic planning.',
  keywords: 'career guidance, life direction, computer science mentorship, scholarship guidance, student counseling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/blue_minimal_sea_logıstıcs_logo__1_-removebg-preview.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-brand/5 via-white to-brand/10 relative`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-grow pt-28 md:pt-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
