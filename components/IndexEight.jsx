//! From Library
import Image from "next/image";

//! From local

//! Image
import mainBackpack from "../assets/images/volcano/main_backpack.png";

//! Styles

export default function IndexEight() {
  const style = { position: "relative", width: "100%", paddingBottom: "13%" };
  return (
    <div style={style}>
      <Image src={mainBackpack} layout="fill" objectFit="contain" alt="" />
    </div>
  );
}
