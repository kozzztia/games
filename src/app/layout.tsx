import '@/styles/globals.scss'
import style from "@/styles/layout.module.scss"
import type {Metadata} from 'next'
import React from "react";
import LayoutHeader from "@/components/Layout/Header/LayoutHeader";

import LayoutMain from "@/components/Layout/Main/LayoutMain";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children, }: { children: React.ReactNode ,}) {
    return (
        <html lang="en">
        <body>

        <header className={style.layoutHeader}>
            <LayoutHeader/>
        </header>

        <main className={style.layoutMain}>
            <LayoutMain>
                {children}
            </LayoutMain>
        </main>

        </body>
        </html>
    )
}
