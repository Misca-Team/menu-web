import Header from "@/components/header/Header";
import Team from "@/components/team/Team";
import Values from "@/components/values/Values";
import ContactForm from "@/components/contactform/ContactForm";
import styles from "./AboutUs.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.introduction}>
        <h2>درباره ما</h2>
        <p>ما یک شرکت پیشرو در ارائه خدمات آنلاین هستیم...</p>
      </section>
      <Team />
      <Values />
      <ContactForm />
    </div>
  );
}