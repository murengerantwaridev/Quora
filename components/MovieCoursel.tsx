import { JSX } from "react/jsx-runtime";
import Image from "next/image";
import bg from "@/app/bg.webp";
export default function MovieCoursel(): JSX.Element {
  return (
    <section className="w-full h-screen bg-black">
      <Image className="w-full h-[110vh]" src={bg} alt="bg" />
    </section>
  );
}
