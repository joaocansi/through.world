"use client";
import dynamic from 'next/dynamic';
import styles from './../styles/page.module.css'
import Header from '@/components/Header';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Map />
    </main>
  )
}
