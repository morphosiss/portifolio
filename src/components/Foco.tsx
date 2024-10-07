import { Flame } from "lucide-react";
import React from "react";

interface ICardFoco {
  tittle: string;
  text: string;
}

const CardFoco: React.FC<ICardFoco> = ({ tittle, text }) => {
  return (
    <div className="h-80 border-r border-b border-zinc-900 p-5 flex flex-col justify-between bg-gradient-to-br from-transparent to-zinc-950 rounded-3xl">
      <header>
        <p className="px-4 py-1 inline-block ring-4 ring-indigo-800 ring-opacity-15 rounded-full text-[14px] font-medium bg-indigo-600 text-white">
          Foco
        </p>
      </header>
      <div className="h-full pt-10">
        <h3 className="text-xl font-medium text-white"> {tittle}</h3>
        <p className="text-[14px] text-zinc-300 pt-4">{text}</p>
      </div>
    </div>
  );
};

const FocoSection = () => {
  return (
    <section className="mt-28">
      <header className="text-center relative flex items-center justify-center">
        <div className="bg-gradient-to-br from-zinc-800 to-transparent w-14 h-14 border border-zinc-900 rounded-full flex items-center justify-center">
          <Flame size={26} className="text-white" />
        </div>
      </header>

      <div className="mt-12 mb-10 max-w-7xl gap-4 w-full m-auto grid grid-cols-4">
        <CardFoco
          tittle="Inovação e Engajamento"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit ex aut incidunt voluptate dolorem quo nobis veritatis ut consectetur doloremque, recusandae beatae omnis aperiam et officia voluptas quibusdam accusantium."
        />
        <CardFoco
          tittle="Inovação e Engajamento"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit ex aut incidunt voluptate dolorem quo nobis veritatis ut consectetur doloremque, recusandae beatae omnis aperiam et officia voluptas quibusdam accusantium."
        />
        <CardFoco
          tittle="Inovação e Engajamento"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit ex aut incidunt voluptate dolorem quo nobis veritatis ut consectetur doloremque, recusandae beatae omnis aperiam et officia voluptas quibusdam accusantium."
        />
        <CardFoco
          tittle="Inovação e Engajamento"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reprehenderit ex aut incidunt voluptate dolorem quo nobis veritatis ut consectetur doloremque, recusandae beatae omnis aperiam et officia voluptas quibusdam accusantium."
        />
      </div>
    </section>
  );
};

export default FocoSection;
