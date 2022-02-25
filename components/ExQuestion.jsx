import { useContext, useEffect } from "react";

import BackpackContext from "../context/BackpackContext";

export const StoryOrQuestion = ({ selectedData }) => {
  const { userItems, setUserItems } = useContext(BackpackContext);

  const setItem = () => {
    alert("You're correct!");
    if (userItems.includes(selectedData.item)) alert("You got it already!");
    else setUserItems([...userItems, selectedData.item]);
  };

  useEffect(() => {
    const items = window.localStorage.getItem("useritems");

    if (items !== null) {
      setUserItems(JSON.parse(window.localStorage.getItem("useritems")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("useritems", JSON.stringify(userItems));
  }, [userItems]);

  return (
    <div className={StoryOrQuestionStyles.storyQuestionCon}>
      <h1>Q{selectedData.id}: Could you answer this question?</h1>
      <button onClick={setItem}>Answer</button>
    </div>
  );
};
