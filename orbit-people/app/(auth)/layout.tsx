import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
    title: 'Khido people',
    description: ' a journey to the planet and its orbit'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout(
    { children }: { children: React.ReactNode }) {

    return (
        <ClerkProvider>
            <html lang="en" >
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
        
    )

}