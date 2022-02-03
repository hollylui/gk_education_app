//! From Library

//! From local

//! Image

//! Styles
import styles from "../styles/TypeOfQuestion.module.scss";

export default function TypeOfQuestion() {
  return (
    <div className={styles.container}>
      {/* math */}
      <div className={styles.radio}>
        <label>Math</label>
        <input
          type="radio"
          name="question"
          id="math"
          value="math"
          className={styles.input}
          checked="checked"
        />
      </div>

      {/* reading */}
      <div className={styles.radio}>
        <label className={styles.reading}>Reading</label>
        <input
          type="radio"
          name="question"
          id="reading"
          value="reading"
          className={styles.input}
        />
      </div>

      {/* logic */}
      <div className={styles.radio}>
        <label className={styles.logic}>Logic</label>
        <input
          type="radio"
          name="question"
          id="logic"
          value="logic"
          className={styles.input}
        />
      </div>
    </div>
  );
}
