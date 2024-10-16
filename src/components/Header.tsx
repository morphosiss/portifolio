import { GitBranch } from "lucide-react";
import ImageLogo from "/img/logo.png";
import Ilustration from "/img/ilustration.png";
import { ReactTyped } from "react-typed";

const InitialBanner = () => {
  return (
    <section className="paisagem-tablet:pt-44 pt-28 w-full">
      <div className="max-w-6xl p-4 text-center w-full m-auto">
        <h1 className="text-white bg-gradient-to-r from-zinc-700  to-white  leading-tight font-medium desktop:text-7xl paisagem:text-5xl retrato-tablet:text-4xl text-3xl mainTittle">
          Uma equipa focada na inovação e no{" "}
          <ReactTyped
            strings={[" desenvolvimento tecnológico!"]}
            loop
            typeSpeed={50}
            backSpeed={30}
          />
        </h1>

        <div className="max-w-3xl w-full m-auto pt-5">
          <h2 className="text-white retrato-tablet:text-base text-[15px]">
            Surgimos na necessidade de provermos ideias que impulsionem e que
            façam de nós mais amantes do desenvolvimento tecnológico, para
            provermos ideias para a evolução e bem estar humano!
          </h2>
          <div className="pt-5 flex justify-center">
            <a
              href="#"
              className="text-white flex items-center justify-center gap-3 w-52 transition-all hover:bg-indigo-800 bg-[#5E17EB] font-medium ring-4 ring-violet-400 ring-opacity-15 px-6 py-2.5 rounded-full"
            >
              Visitar Github
              <GitBranch size={21} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <img src={Ilustration} alt="image" className="m-auto" />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header className="w-full ">
      <div className="w-full z-20 fixed border-b bg-[#000] border-zinc-900 py-5 paisagem-tablet:px-8 px-5 flex items-center justify-between paisagem-tablet:justify-around">
        <div>
          <img src={ImageLogo} alt="logotipo_morphosis" className="paisagem-tablet:w-32 w-24" />
        </div>
        <nav>
          <ul className=" items-center gap-16 paisagem-tablet:flex hidden">
            <li>
              <a href="#" className="text-white transition-all hover:text-opacity-55">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:text-opacity-55">
                Foco
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:text-opacity-55">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:text-opacity-55">
                Equipa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white bg-[#5E17EB] transition-all hover:bg-indigo-800 font-medium ring-4 ring-violet-400 ring-opacity-15 px-6 py-2.5 rounded-full"
              >
                Patrocine
              </a>
            </li>
            <button>
              
            </button>
          </ul>
        </nav>
      </div>
      <InitialBanner />
    </header>
  );
};

export default Header;
