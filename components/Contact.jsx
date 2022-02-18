import ReactModal from "react-modal";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";

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
      <form>
        <div className="container">
          <label htmlFor="name">
            <p>Name</p>
            <input
              id="name"
              type="text"
              value={formData.name}
              className="form-field"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
          </label>
          <label>
            <label>
              <p>Email</p>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="form-field"
              ></input>
            </label>
            <p>Comments</p>
            <input
              id="comment"
              type="text"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              className="form-field-comment"
            ></input>
          </label>

          <button className="form-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
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
