import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import Script from 'next/script'
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://outstatic.com'),
  title: {
    default: 'AI Marketing Solutions',
    template: '%s | Outstatic'
  },
  description: 'Your expert on digital marketing',
  openGraph: {
    title: 'Ai Marketing Solutions',
    description: 'The evolution of digital marketing.',
    url: absoluteUrl('/'),
    siteName: 'Next.js',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/favicon-32x32.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `
          }}
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}
