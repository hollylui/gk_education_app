import ContactForm from "../components/Contact";
import NavBarHome from "../components/NavHome";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <NavBarHome />
      <div>
        <h2> We would love to hear fom you!</h2>
        <p>How can we improve our games? What do you like about our games?</p>
        <ContactForm />
      </div>
    </div>
  );
}
