import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: 'Response Advertising',
  description: 'Response Advertising – Multicultural Marketing & Advertising Agency ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
