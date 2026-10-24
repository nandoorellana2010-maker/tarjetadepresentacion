import Image from "next/image";
import Cards from "./componentes/Cards";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-4 dark:text-black  ">
        Tarjetas de Presentación
      </h1>
      <Cards></Cards>
          </div>
  );
}
