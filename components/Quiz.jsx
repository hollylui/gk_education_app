import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import BackpackContext from "../context/BackpackContext";
import ReactModal from "react-modal";

import GameContext from "../context/GameContext";

import styles from "../styles/Quiz.module.scss";

export default function Quiz({ questions, item }) {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); //user items is an empty array in default state
  const { userItems, setUserItems } = useContext(BackpackContext);

  const { currGameId, gameIds } = useContext(GameContext);
  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];

  let items = ["coconut", "fire", "leaf", "stone", "water"];

  //*index for choosing item from 'items' array.
  const [index, setIndex] = useState(0);

  //*add item to userItems state (why ternary operator?: to prevent showing 'null' when index is 0)
  function addItem(_index) {
    // let backpackContentsHowMany = userItems.length();
    // let item = items[backpackContentsHowMany];
    index === 0
      ? setUserItems([])
      : setUserItems([...userItems, items[_index - 1]]);
  }

  //* there are 2 addItem which have same name. so I commented in.
  // function addItem() {
  //   setUserItems(userItems.push(item));
  // }

  function makeCorrect() {
    setIsCorrect(true);
  }
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    // setModalIsOpen(false);
    router.push(`/volcano/${nextGameId}`);
  }

  const handleClick = async (event) => {
    let value = event.target.value;

    console.log(typeof value);

    if (value === "true") {
      // addItem();
      makeCorrect();
      console.log("setting to correct");
      //* If the user answers correctly, then the index is incremented.
      setIndex(index + 1);
    }

    openModal();
  };

  useEffect(() => {
    //* Whenever the index changes, using this index as an index number for choosing a specific item in 'items' array, and then add the item to userItems state.
    if (index >= 0 && index <= items.length) {
      addItem(index);
    }
  }, [index]);

  //* when this component mounts, get items from localstorage,
  //* If there are items inside localstorage, save them to userItems state.
  useEffect(() => {
    const gotItems = window.localStorage.getItem("useritems");
    if (gotItems !== null) {
      setUserItems(JSON.parse(window.localStorage.getItem("useritems")));
    }
  }, []);

  //* Whenever userItems changes save it to the localstorage.
  useEffect(() => {
    localStorage.setItem("useritems", JSON.stringify(userItems));
  }, [userItems]);

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
            {question.answers[0].text}{" "}
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
