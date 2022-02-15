import backpack from "../assets/images/volcano/backpack.png";
import Image from "next/image";
import backpackStyles from "../styles/Backpack.module.scss";
import { useContext, useEffect } from "react";
import BackpackContext from "../context/BackpackContext";
import Modal from "./modal/Modal";
import Boat from "../assets/images/items/boat.png";
import { useRouter } from "next/router";
// import coconutImg from "../assets/svg/coconut.png";

const Backpack = () => {
  const {
    userItems,
    showItems,
    showNHideItems,
    modal,
    setModal,
    combine,
    setCombine,
  } = useContext(BackpackContext);

  const router = useRouter();

  useEffect(() => {
    console.log(userItems);
    console.log(userItems.length);
    if (userItems.length === 5) {
      setModal(true);
    }
  }, [userItems]);

  useEffect(() => {
    if (combine) {
      setTimeout(() => {
        router.push("/volcano/ending/special");
      }, 3000);
    }
  }, [combine]);

  return (
    <>
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
      <Modal state={modal} setState={setModal}>
        {combine ? (
          <>
            <h1>You got a special item!</h1>
            <Image width={200} height={200} src={Boat} />
            <p className={backpackStyles.sentence}>
              With this boat, you can sail to the special ending!
            </p>
          </>
        ) : (
          <>
            <h1>Do you want to combine your items to get a special Item?</h1>
            <div>
              <button id={backpackStyles.yes} onClick={() => setCombine(true)}>
                Yes
              </button>
              <button
                id={backpackStyles.no}
                onClick={() => router.push("/volcano/ending")}
              >
                No
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Backpack;
