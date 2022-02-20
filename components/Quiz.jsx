import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import BackpackContext from "../context/BackpackContext";
import ReactModal from "react-modal";

import GameContext from "../context/GameContext";

import styles from "../styles/Quiz.module.scss";

export default function Quiz({ questions }) {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); //user items is an empty array in default state
  const { userItems, setUserItems, quizCount, setQuizCount } =
    useContext(BackpackContext);

  const { currGameId, gameIds } = useContext(GameContext);
  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];

  let items = ["coconut", "fire", "leaf", "stone", "water"];

  function addItem() {
    let nextItemIndex = userItems.length;
    let item = items[nextItemIndex];
    setUserItems([...userItems, item]);
  }

  function makeCorrect() {
    setIsCorrect(true);
  }
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    router.push(`/volcano/${nextGameId}`);
  }

  const handleClick = async (event) => {
    let value = event.target.value;

    if (value === "true") {
      makeCorrect();
      addItem();
    }
    //* to check how many quizzes users tried to solve.
    setQuizCount(quizCount + 1);
    openModal();
  };

  //pull random question from database
  let randomQuestion = Math.floor(Math.random() * questions.length);
  const question = questions[randomQuestion];

  return (
    <div>
      {/* Question box */}
      <div className={styles.container}>
        <h3>{question.text}</h3>

        <div className={styles.subContainer}>
          <button
            className={styles.button}
            onClick={handleClick}
            type="submit"
            value={question.answers[0].correctAnswer}
          >
            {question.answers[0].text}
          </button>
          <button
            className={styles.button}
            onClick={handleClick}
            type="submit"
            value={question.answers[1].correctAnswer}
          >
            {question.answers[1].text}
          </button>
          <button
            className={styles.button}
            onClick={handleClick}
            type="submit"
            value={question.answers[2].correctAnswer}
          >
            {question.answers[2].text}
          </button>
          <button
            className={styles.button}
            onClick={handleClick}
            type="submit"
            value={question.answers[3].correctAnswer}
          >
            {question.answers[3].text}
          </button>
        </div>
      </div>

      {/* Pop-up Modal */}

      <ReactModal
        isOpen={modalIsOpen}
        contentLabel={"Question Answer"}
        className={styles.modalContent}
      >
        <p>
          You answered the question
          {isCorrect ? " correctly, great job!" : " incorrectly"}
        </p>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </div>
  );
}
