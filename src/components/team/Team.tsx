import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.team}>
      <h2>تیم ما</h2>
      <div className={styles.members}>
        <div className={styles.member}>
          <img src="/images/team1.jpg" alt="عضو تیم 1" />
          <h3>رضا احمدی</h3>
          <p>مدیرعامل</p>
        </div>
        {/* سایر اعضای تیم */}
      </div>
    </section>
  );
}