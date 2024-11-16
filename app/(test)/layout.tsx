import "../globals.css";
import Header from '@/app/components/header'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header></Header>
        {children}
    </>
  );
}