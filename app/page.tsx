import Navbar from "@/components/Navbar";
import bg from "./bg.webp";
import Image from "next/image";
import React from "react";
export default function Rootpage(): React.ReactNode {
  return (
    <main>
      <div className="relative">
        <Image src={bg} width={bg.width} height={bg.height} alt="bg" />
      </div>
    </main>
  );
}
