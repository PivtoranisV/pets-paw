import Navbar from '@/components/Navbar';
import './globals.css';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: 'PetsPaw',
  description: 'Fun app to play with cat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} flex`}>
        <Navbar />
        <main className="ml-[622px] overflow-y-scroll">{children}</main>
      </body>
    </html>
  );
}
