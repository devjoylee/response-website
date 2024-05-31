import '@/app/globals.css';
import type { Metadata } from 'next';
import { Header, Footer, PreviousNext } from '@/app/components';

export const metadata: Metadata = {
  title: 'Response Advertising',
  description: 'Response Advertising – Multicultural Marketing & Advertising Agency ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header hasBG={false} />
        <main className='maxWidth'>
          {children}
          <PreviousNext />
        </main>
        <Footer />
      </body>
    </html>
  );
}
