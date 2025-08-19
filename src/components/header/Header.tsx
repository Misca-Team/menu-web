import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1>خدمات آنلاین ما</h1>
        <p>تجربه‌ای نو در دنیای دیجیتال</p>
      </div>
    </header>
  );
}