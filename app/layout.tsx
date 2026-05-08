import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Retro Handheld Gaming Museum',
  description:
    'Explore the major milestones of handheld gaming through a museum-style chronology from the Nintendo Game Boy to the Nintendo Switch.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
