import MovieCoursel from "@/components/MovieCoursel";
import bg from "./bg.webp";
import Image from "next/image";
import React from "react";
export default function Rootpage(): React.ReactNode {
  return (
    <main>
      <MovieCoursel />
    </main>
  );
}
