import { useContext, useEffect } from "react";
import GameContext from "../contexts/GameContext";
import BackpackContext from "../context/BackpackContext";

export const StoryOrQuestion = ({ selectedData }) => {
  //! This State adds items to the backpack.
  const { userItems, setUserItems } = useContext(BackpackContext);

  //! You can add this function to the choice of the right answer.
  const setItem = () => {
    alert("You're correct!");
    if (userItems.includes(selectedData.item)) alert("You got it already!");
    else setUserItems([...userItems, selectedData.item]);
  };

  useEffect(() => {
    //! When the quiz component mounts get items that we saved them to from localstorage and save them to 'items' variable.
    const items = window.localStorage.getItem("useritems");
    //! if there are items on the localstorage, then save items to the 'userItems' state.
    if (items !== null) {
      setUserItems(JSON.parse(window.localStorage.getItem("useritems")));
    }
  }, []);

  useEffect(() => {
    //! Whenever userItems is changed, then save them to the localstorage.
    localStorage.setItem("useritems", JSON.stringify(userItems));
  }, [userItems]);

  return (
    <div className={StoryOrQuestionStyles.storyQuestionCon}>
      <h1>Q{selectedData.id}: Could you answer this question?</h1>
      {/* //! give the setItem function to the right answer. */}
      <button onClick={setItem}>Answer</button>
    </div>
  );
};
