import './globals.css'

export const metadata = {
  title: 'Acronyms Search',
  description: 'Predictive Search App for the Marketplace Abbreviations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
