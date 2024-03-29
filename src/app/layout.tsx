import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '~/components/theme/theme-provider';

import './globals.css'
import { ThemeToggle } from '~/components/theme/theme-toggle';
import { NavBar } from '~/components/layout/nav-bar';
import { cn } from '~/lib/utils';
import { ScrollArea } from '~/components/ui/scroll-area';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fridge Poetry',
  description: 'Fridge Poetry for the digital age',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'min-h-screen')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
