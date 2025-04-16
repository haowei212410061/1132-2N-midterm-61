import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import HeaderMid1_61 from '@/components/mid1_61/HeaderMid1_61';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const roboto = localFont({
  src: '../Roboto-Regular.ttf',
});

export const metadata = {
  title: 'Mid_61 page',
  description: 'Mid_61 page for p1_61 p2_61 p3_61 p4_61',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <HeaderMid1_61 />
        <div className='flex-1 px-8 py-8'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
