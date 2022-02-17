
import ContactForm from "../components/Contact";
import NavBarHome from "../components/NavHome";
import styles from "../styles/Contact.module.scss"
import navstyles from "../styles/Home.module.scss"



export default function Contact () {
    

    return (
        <div className={navstyles.container}>
        <NavBarHome />
        
        <div className={styles.container}>


            <h2 className={styles.formHeader}> e would love to hear fom you!</h2>
            <p className={styles.formText}>How can we improve our games? What do you like about our games?</p>
            <ContactForm />
        </div>
        </div>
    )
}