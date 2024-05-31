import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.cardsContainer}>
      <div className={styles.card01}></div>
      <div className={styles.card02}></div>
      <div className={styles.card03}></div>
      <div className={styles.card04}></div>
      <div className={styles.card05}></div>
      <div className={styles.card06}></div>
      <div className={styles.card07}></div>
    </main>
  );
}
