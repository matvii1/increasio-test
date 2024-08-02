import { Inter } from 'next/font/google'

import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Increasio - Test project',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={inter.className}>
                {children}
            </body>
        </html>
    )
}
