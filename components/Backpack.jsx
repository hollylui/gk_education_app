import backpack from "../assets/images/volcano/backpack.png";
import Image from "next/image";
import backpackStyles from "../styles/Backpack.module.scss";
import { useContext, useEffect } from "react";
import BackpackContext from "../context/BackpackContext";
// import coconutImg from "../assets/svg/coconut.png";

const Backpack = () => {
  const { userItems, setUserItems, showItems, showNHideItems } =
    useContext(BackpackContext);

  useEffect(() => {
    console.log(userItems);
  }, [userItems]);
  return (
    <div className={backpackStyles.backpackOuter}>
      <div className={backpackStyles.backpackInner}>
        <Image
          className={backpackStyles.backpackImg}
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
            id={backpackStyles[`${userItems[0]}`]}
          ></div>
          <div
            className={backpackStyles.item}
            id={backpackStyles[`${userItems[1]}`]}
          ></div>
          <div
            className={backpackStyles.item}
            id={backpackStyles[`${userItems[2]}`]}
          ></div>
          <div
            className={backpackStyles.item}
            id={backpackStyles[`${userItems[3]}`]}
          ></div>
          <div
            className={backpackStyles.item}
            id={backpackStyles[`${userItems[4]}`]}
          ></div>

          {/* {showItems ? <button>Compound</button> : null} */}
        </div>
      </div>
    </div>
  );
};

export default Backpack;
