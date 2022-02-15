import React, { useContext } from "react";
import styles from "../../styles/Modal.module.scss";

function Modal({ children, state, setState }) {
  console.log(state);
  return (
    <div className={state === true ? styles.modalOuter : styles.modalHide}>
      <div className={styles.modalCon}>
        {/* <div className={styles.closeX} onClick={setState}>
          <div className={styles.xBox}>
            <div>x</div>
          </div>
        </div> */}
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
