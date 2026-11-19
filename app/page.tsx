import bg from "./bg.webp"
import Image from "next/image"
export default function Rootpage() {
  return <div>
    <Image src={bg} width={bg.width } height={bg.height} alt="bg" />
  </div>
}
