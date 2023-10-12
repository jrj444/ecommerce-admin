import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { zhCN } from '@clerk/localizations';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Admin DashBoard',
  description: 'Admin DashBoard',
};

export default function RootLayout({
    children,
  }: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
