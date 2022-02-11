//! From library
import Image from "next/image";
import { useContext } from "react";

//! From local
import BranchContext from "../context/BranchContext";

export default function IndexEighteen() {
  const { animalsList } = useContext(BranchContext);

  const width = 90;
  const height = 90;

  const anima1 = `${animalsList[0].src}`;
  const anima2 = `${animalsList[1].src}`;
  const anima3 = `${animalsList[2].src}`;
  const anima4 = `${animalsList[3].src}`;
  const anima5 = `${animalsList[4].src}`;

  return (
    <div>
      <Image src={anima1} alt="" width={width} height={height} />
      <Image src={anima2} alt="" width={width} height={height} />
      <Image src={anima3} alt="" width={width} height={height} />
      <Image src={anima4} alt="" width={width} height={height} />
      <Image src={anima5} alt="" width={width} height={height} />
    </div>
  );
}
