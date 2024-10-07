import { Globe, PenTool, Spline, TabletSmartphone } from "lucide-react";
import Ball from "/img/ball.png";
import React from "react";

interface CardServiceProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const CardService: React.FC<CardServiceProps> = ({ icon, title, desc }) => {
  return (
    <div className="p-3 bg-gradient-to-b from-zinc-950 rounded-3xl">
      <header className="flex justify-center items-center h-40 bg-gradient-to-b from-[#030303] to-transparent rounded-2xl relative">
        {icon}
        <img
          src={Ball}
          className="opacity-55 absolute"
          alt="degrade_image_effect"
        />
      </header>

      <div className="pt-4 ps-3">
        <h4 className="text-white pb-2 text-xl">{title}</h4>
        <small className="text-white">{desc}</small>

        <footer className="mt-8">
          <a
            href="#"
            className="text-white text-[14px] bg-[#5E17EB] transition-all hover:bg-indigo-700 font-medium ring-4 ring-violet-400 ring-opacity-15 px-6 py-2.5 rounded-full"
          >
            Solicitar
          </a>
        </footer>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mt-28">
      <header className="text-center">
        <h4 className="text-4xl text-white">
          Também prestamos excelentes serviços!
        </h4>
      </header>

      <div className="mt-12 max-w-7xl w-full m-auto grid grid-cols-4 gap-4">
        <CardService
          icon={
            <TabletSmartphone
              size={65}
              strokeWidth={1}
              className="text-indigo-100 absolute"
            />
          }
          title="Criação de Aplicativos"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam nulla!"
        />
        <CardService
          icon={
            <Globe
              size={65}
              strokeWidth={1}
              className="text-indigo-100 absolute"
            />
          }
          title="Criação de Websites"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam nulla!"
        />{" "}
        <CardService
          icon={
            <PenTool
              size={65}
              strokeWidth={1}
              className="text-indigo-100 absolute"
            />
          }
          title="Logotipos"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam nulla!"
        />
        <CardService
          icon={
            <Spline
              size={65}
              strokeWidth={1}
              className="text-indigo-100 absolute"
            />
          }
          title="Design Web e Protótipos"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ullam nulla!"
        />
      </div>
    </section>
  );
};

export default Services;
