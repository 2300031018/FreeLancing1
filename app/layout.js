import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Roof Waterproofing & Seepage Solutions in Vijayawada | Yashwanth Hemanth',
  description: 'Professional waterproofing service in Vijayawada. 25+ years experience. Free roof inspection available. Call now for quick service.',
  keywords: 'waterproofing contractor Vijayawada, terrace waterproofing Vijayawada, roof seepage repair near me, bathroom waterproofing Vijayawada',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  canonical: 'https://yashwanthwaterproofing.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://yashwanthwaterproofing.com',
    title: 'Roof Waterproofing & Seepage Solutions in Vijayawada | Yashwanth Hemanth',
    description: 'Professional waterproofing service. 25+ years of expertise.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#001a4d" />
        
        {/* Apple App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Yashwanth Waterproofing" />
        
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%23001a4d'>🏗</text></svg>" />
      </head>
      <body className="bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
