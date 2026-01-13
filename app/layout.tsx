import type { Metadata } from 'next'
import { ThemeProvider } from '@/lib/theme-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hiba Nahri - Portfolio',
  description: 'Professional portfolio showcasing projects, skills, and experience',
  keywords: 'portfolio, developer, engineer, projects',
  authors: [{ name: 'Hiba Nahri' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
