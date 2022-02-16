//! From Library
import Image from "next/image";

//! Images
import animalCounter from "../assets/images/volcano/animal_counter.png";

//! Styles

export default function IndexNine() {
  const style = { position: "relative", width: "100%", paddingBottom: "12%" };
  return (
    <div style={style}>
      <Image
        src={animalCounter}
        alt="animal counter"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
