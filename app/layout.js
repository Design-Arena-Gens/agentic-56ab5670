export const metadata = {
  title: 'Mental Health Professional - Job Experience Generator',
  description: 'Generate professional job experience statements for mental health positions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
