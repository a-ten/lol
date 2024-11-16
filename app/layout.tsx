import "@/app/globals.css";
import { ADLaM_Display } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';
// If loading a variable font, you don't need to specify the font weight
const inter = ADLaM_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
