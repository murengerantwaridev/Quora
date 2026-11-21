import Navbar from "@/components/Navbar";
import bg from "./bg.webp";
import Image from "next/image";
export default function Rootpage() {
  return (
    <main >
      <div className="relative">
        <Navbar />
        <div className="h-screen bg-neutral-950/20  absolute w-full">
          rthids;fjasdklf
        </div>
        <Image src={bg} width={bg.width} height={bg.height} alt="bg" />
      </div>
      {/*<Navbar />*/}
    </main>
  );
}
