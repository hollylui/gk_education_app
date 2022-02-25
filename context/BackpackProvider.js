import { useEffect, useState } from "react";
import BackpackContext from "./BackpackContext";

const BackpackProvider = ({ children }) => {
  const [gameOn, setGameOn] = useState(false);
  const [currentGame, setCurrentGame] = useState("0");
  const [progressValue, setProgressValue] = useState(10);
  const [userItems, setUserItems] = useState([]);
  const [quizCount, setQuizCount] = useState(0);
  const is5Items = userItems.length >= 5;
  const is5Quizzes = quizCount >= 5;
  const [animalCount, setAnimalCount] = useState(0);

  const [showItems, setShowItems] = useState(true);
  const showNHideItems = () => {
    setShowItems(!showItems);
  };

  const [modal, setModal] = useState(false);
  const [combine, setCombine] = useState(false);
  return (
    <BackpackContext.Provider
      value={{
        gameOn,
        setGameOn,
        currentGame,
        setCurrentGame,
        progressValue,
        setProgressValue,
        userItems,
        setUserItems,
        showItems,
        showNHideItems,
        modal,
        setModal,
        combine,
        setCombine,
        quizCount,
        setQuizCount,
        is5Items,
        is5Quizzes,
        animalCount,
        setAnimalCount,
      }}
    >
      {children}
    </BackpackContext.Provider>
  );
};

export default BackpackProvider;
