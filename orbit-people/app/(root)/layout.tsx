import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"

import Bottombar from '@/components/shared/Bottombar'
import RightSidebar from '@/components/shared/RightSidebar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khidos',
  description: 'This is an planetery social media application for orbit people khido means orbit',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" >
        <body className={`${inter.className}`}>
          <Topbar />
          <main>
              <LeftSidebar />
                  <section className='main-container'>
                    <div className='w-full max-4-4xl'>
                      {children}
                    </div>
                  </section>
              <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>

  )
}
