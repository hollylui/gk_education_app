//! From local
import ContactForm from "../components/ContactForm";
import NavBarHome from "../components/NavHome";

//! Styles
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.containter}>
      <NavBarHome />
      <div>
        <h2> We would love to hear fom you!</h2>
        <p>How can we improve our games? What do you like about our games?</p>
        <ContactForm />
      </div>
    </div>
  );
}
