import type { Metadata } from 'next'
import './globals.css'
import { Lato } from 'next/font/google'
import { Theme } from '@/state/context/theme'
import NavBar from '@/components/navBar/navBar'
import Background from '@/utils/background/background'

const lato = Lato({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    preload: true,
})

export const metadata: Metadata = {
    metadataBase: new URL(`https://puntilachain.com`),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="icon" href="/favicon.ico" />
                <meta name="color-scheme" content="dark light" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" type="icon" href="/favicon.ico" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en_GB" />
                <meta name="revisit-after" content="4 days" />
                <meta property="og:url" content="https://puntilachain.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Teemu Puntila" />
                <meta
                    property="og:description"
                    content="Teemu Puntila Portfolio and Projects Webpage."
                />
                <meta property="og:image" content="/favicon.svg" />
                <meta name="twitter:card" content="/favicon.svg" />
                <meta name="twitter:title" content="Teemu Puntila" />
                <meta
                    name="twitter:description"
                    content="Teemu Puntila Portfolio and Projects Webpage."
                />
                <meta name="twitter:image" content="/favicon.svg" />
            </head>
            <body className={lato.className}>
                <Theme>
                    <Background>
                        <NavBar />
                        {children}
                    </Background>
                </Theme>
            </body>
        </html>
    )
}
