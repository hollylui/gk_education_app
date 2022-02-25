//! Styles
import styles from "../styles/TypeOfQuestion.module.scss";

export default function TypeOfQuestion() {
  return (
    <div className={styles.container}>
      {/* math */}
      <div className={`${styles.radio} ${styles.math}`}>
        <label>Math</label>
        <input
          type="radio"
          name="question"
          id="math"
          value="math"
          className={styles.input}
        />
      </div>

      {/* reading */}
      <div className={`${styles.radio} ${styles.reading}`}>
        <label>Reading</label>
        <input
          type="radio"
          name="question"
          id="reading"
          value="reading"
          className={styles.input}
        />
      </div>

      {/* logic */}
      <div className={`${styles.radio} ${styles.logic}`}>
        <label>Logic</label>
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
