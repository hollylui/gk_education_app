import styles from "../../styles/Modal.module.scss";

function Modal({ children, state }) {
  console.log(state);
  return (
    <div className={state === true ? styles.modalOuter : styles.modalHide}>
      <div className={styles.modalCon}>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
