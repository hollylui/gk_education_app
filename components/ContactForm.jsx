import ReactModal from "react-modal";
import { useState } from "react";
import styles from "../styles/ContactForm.module.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
    openModal();
  };

  return (
    <>
      <form className={styles.container}>
        {/* name section */}
        <div className={styles.section}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* email section */}
        <div className={styles.section}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* comment section */}
        <div className={styles.section}>
          <label>Comments</label>

          <textarea
            rows="3"
            cols="10"
            id="comment"
            type="text"
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          ></textarea>
        </div>

        <button className="form-button" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <div>
        <ReactModal
          isOpen={modalIsOpen}
          contentLabel={"thanks for contacting us"}
          className={styles.modalContent}
        >
          <p>Thanks for contacting us!</p>
          <button onClick={closeModal}>Close</button>
        </ReactModal>
      </div>
    </>
  );
}
