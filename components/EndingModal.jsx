import { useContext, useEffect } from "react";
import BackpackContext from "../context/BackpackContext";
import Modal from "./modal/Modal";
import backpackStyles from "../styles/Backpack.module.scss";
import laserGun from "../assets/images/special/laserGun.gif";
import magicWand from "../assets/images/special/magicWandTrans.gif";
import boat from "../assets/images/items/boat.png";
import Image from "next/image";
import { useRouter } from "next/router";

function EndingModal() {
  const { modal, setModal, combine, setCombine, is5Items, is5Quizzes } =
    useContext(BackpackContext);

  const router = useRouter();
  //if (combine)
    useEffect(() => {
      setTimeout(() => {
        router.push("/volcano/ending/special");
      }, 4000);
    }, [combine]);

  return (
    <Modal state={modal} setState={setModal}>
      {/* if users got 5items and combined them */}
      {combine ? (
        <>
          <h1>You got a special item!</h1>
          <Image
            width={300}
            height={200}
            src={laserGun}
            id={backpackStyles.boat}
            alt=""
          />
          <p className={backpackStyles.sentence}>
            This laser gun seems to attract something....
          </p>
        </>
      ) : is5Quizzes && is5Items ? (
        <>
          {/* if users got 5items from 5 quizzes */}
          <h1>Do you want to combine all your items to get a special Item?</h1>
          <div>
            <Image
              src={magicWand}
              onClick={() => setCombine(true)}
              id={backpackStyles.magicWand}
              width={400}
              height={250}
              alt=""
            />
          </div>
          <h3>
            <span id={backpackStyles.yes}>Yes?</span> then click this magic
            wand!
          </h3>
        </>
      ) : is5Quizzes && !is5Items ? (
        <>
          {/* if users tried to solve 5 quizzes but didn't get 5 items from them. */}
          <h1>{`You don't get all 5 items, but well done!`}</h1>
          <div>
            <Image
              src={boat}
              onClick={() => router.push("/volcano/ending")}
              id={backpackStyles.boat}
              width={300}
              height={250}
              alt=""
            />
          </div>
          <h2>Click the boat and Go!</h2>
        </>
      ) : null}
    </Modal>
  );
}

export default EndingModal;
