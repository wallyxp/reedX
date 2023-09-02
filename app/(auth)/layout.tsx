import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import React from "react";
import '../globals.css'
export const metadata = {
    title: 'Threads',
    description: 'Next js 13 meta threads clone app'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children} : {children: React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}