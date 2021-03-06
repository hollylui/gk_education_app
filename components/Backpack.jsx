import backpack from "../assets/images/volcano/backpack.png";
import Image from "next/image";
import backpackStyles from "../styles/Backpack.module.scss";
import { useContext, useEffect } from "react";
import BackpackContext from "../context/BackpackContext";
import { useRouter } from "next/router";
import EndingModal from "./EndingModal";
import mouse from "../assets/images/volcano/animalcounter/mouse.png";
import GameContext from "../context/GameContext";

const Backpack = () => {
  const {
    userItems,
    showItems,
    showNHideItems,
    setModal,
    combine,
    quizCount,
    is5Quizzes,
    animalCount,
  } = useContext(BackpackContext);
  const { currGameId, gameIds } = useContext(GameContext);
  const index = gameIds.indexOf(currGameId);

  const router = useRouter();

  //* After user tried to solve 5 quizzes, then a modal is opened to show them the result.
  useEffect(() => {
    if (is5Quizzes) {
      setModal(true);
    }
  }, [quizCount]);

  //* After users had combined their 5 items and got a special item. after 5 second push to the special ending page.
  useEffect(() => {
    if (combine) {
      setTimeout(() => {
        router.push("/volcano/ending/special");
      }, 4000);
    }
  }, [combine]);

  return (
    <>
      {/* <div className={backpackStyles.middleFooter}> */}
      <div className={backpackStyles.backpackOuter}>
        <div className={backpackStyles.backpackInner}>
          <Image
            className={
              index == 6 || index == 8
                ? `${backpackStyles.backpackImg} ${backpackStyles.blinking}`
                : backpackStyles.backpackImg
            }
            responsive
            src={backpack}
            alt="backpack"
            width={100}
            height={100}
            onClick={showNHideItems}
          />
          <div
            className={
              showItems
                ? backpackStyles.itemContainer
                : backpackStyles.itemContainerHide
            }
          >
            <div
              className={backpackStyles.item}
              //* check if userItems empty. If it is not empty, show the item on the backpack.
              id={userItems && backpackStyles[`${userItems[0]}`]}
            ></div>
            <div
              className={backpackStyles.item}
              id={userItems && backpackStyles[`${userItems[1]}`]}
            ></div>
            <div
              className={backpackStyles.item}
              id={userItems && backpackStyles[`${userItems[2]}`]}
            ></div>
            <div
              className={backpackStyles.item}
              id={userItems && backpackStyles[`${userItems[3]}`]}
            ></div>
            <div
              className={backpackStyles.item}
              id={userItems && backpackStyles[`${userItems[4]}`]}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={
          index == 6 || index == 9
            ? `${backpackStyles.animalCounter} ${backpackStyles.blinking}`
            : backpackStyles.animalCounter
        }
      >
        <Image src={mouse} width={100} height={150} alt="counter" />
        <h1>{animalCount}/5</h1>
      </div>
      {/* </div> */}
      <EndingModal />
    </>
  );
};

export default Backpack;
