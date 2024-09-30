'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css'; // Создадим отдельный файл стилей


export default function Nav() {
  const pathname = usePathname();

  return (
    <div style={{ textAlign: 'center', display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Link className={styles.link} href="/" style={{ color: pathname === '/' ? 'gold' : 'white' }}>Home</Link>
      <Link className={styles.link} href="/about" style={{ color: pathname === '/about' ? 'gold' : 'white' }}>About</Link>
      <Link className={styles.link} href="/contact" style={{ color: pathname === '/contact' ? 'gold' : 'white' }}>Contact</Link>
    </div>
  )
}