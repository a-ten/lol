import "./globals.css";
import Header from '@/../components/header'


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
