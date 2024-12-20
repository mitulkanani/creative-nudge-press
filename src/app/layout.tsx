import type { Metadata } from 'next';
import './globals.css';
import NavbarFooter from '@/components/Common/NavbarFooter';

export const metadata: Metadata = {
  title: 'Creative Nudge Press',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/logo.svg" type="image/svg" sizes="any" />
      </head>
      <body className={`font-lora`}>
        <NavbarFooter>{children}</NavbarFooter>
      </body>
    </html>
  );
}
