import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h2>تماس با ما</h2>
      <form>
        <input type="text" placeholder="نام شما" required />
        <input type="email" placeholder="ایمیل شما" required />
        <textarea placeholder="پیام شما" required></textarea>
        <button type="submit">ارسال پیام</button>
      </form>
    </section>
  );
}