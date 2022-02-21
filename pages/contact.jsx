import { useContext } from "react";
import ContactForm from "../components/Contact";
import NavBarHome from "../components/NavHome";
import BackpackContext from "../context/BackpackContext";

export default function Contact() {
  return (
    <div>
      <NavBarHome />
      <div>
        <h2> We would love to hear fom you!</h2>
        <p>How can we improve our games? What do you like about our games?</p>
        <ContactForm />
      </div>
    </div>
  );
}
