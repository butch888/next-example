import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header />

        <main style={{ textAlign: 'center', marginTop: '100px' }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
