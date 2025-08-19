import styles from "./Values.module.css";

export default function Values() {
  return (
    <section className={styles.values}>
      <h2>ارزش‌های ما</h2>
      <ul>
        <li>صداقت</li>
        <li>نوآوری</li>
        <li>تعهد به کیفیت</li>
      </ul>
    </section>
  );
}