import '@/app/globals.css';
import type { Metadata } from 'next';
import { Header, Footer } from '@/app/components';

export const metadata: Metadata = {
  title: 'Response Advertising',
  description: 'Response Advertising – Multicultural Marketing & Advertising Agency ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header isMain={true} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
