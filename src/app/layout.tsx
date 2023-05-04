import './globals.css'
import { Navbar } from './navbar'
import Footer from './footer'

export const metadata = {
  title: 'Activiti Toolkit',
  description: 'Activiti tookit for automating Activiti tasks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
