import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../index.css';

const description =
  'Madhubala Kumari — full-stack developer focused on Python, FastAPI, REST APIs, and SQL.';

export const metadata: Metadata = {
  title: 'Madhubala Kumari — Developer Portfolio',
  description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Madhubala Kumari — Developer Portfolio',
    description:
      'A practical full-stack developer portfolio focused on Python, FastAPI, REST APIs, and SQL.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhubala Kumari — Developer Portfolio',
    description:
      'A practical full-stack developer portfolio focused on Python, FastAPI, REST APIs, and SQL.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
