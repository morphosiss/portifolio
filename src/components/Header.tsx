import { GitBranch } from "lucide-react";
import ImageLogo from "/img/logo.png";
import Ilustration from "/img/ilustration.png";
import { ReactTyped } from "react-typed";

const InitialBanner = () => {
  return (
    <section className="pt-32 w-full">
      <div className="max-w-6xl text-center w-full m-auto">
        <h1 className="text-white bg-gradient-to-r from-zinc-700  to-white  leading-tight font-medium text-7xl mainTittle">
          Uma equipa focada na inovação e no{" "}
          <ReactTyped
            strings={[" desenvolvimento tecnológico!"]}
            loop
            typeSpeed={50}
            backSpeed={30}
          />
        </h1>

        <div className="max-w-3xl w-full m-auto pt-5">
          <h2 className="text-white">
            Surgimos na necessidade de provermos ideias que impulsionem e que
            façam de nós mais amantes do desenvolvimento tecnológico, para
            provermos ideias para a evolução e bem estar humano!
          </h2>
          <div className="pt-5 flex justify-center">
            <a
              href="#"
              className="text-white flex items-center justify-center gap-3 w-52 bg-[#5E17EB] font-medium ring-4 ring-violet-400 ring-opacity-15 px-6 py-2.5 rounded-full"
            >
              Visitar Github
              <GitBranch size={21} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={Ilustration} alt="image" className="m-auto" />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <header className="w-full ">
      <div className="w-full py-5 px-8 flex items-center justify-around">
        <div>
          <img src={ImageLogo} alt="logotipo_morphosis" className="w-32" />
        </div>
        <nav>
          <ul className="flex items-center gap-16">
            <li>
              <a href="#" className="text-white">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Foco
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Equipa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white bg-[#5E17EB] font-medium ring-4 ring-violet-400 ring-opacity-15 px-6 py-2.5 rounded-full"
              >
                Patrocine
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <InitialBanner />
    </header>
  );
};

export default Header;
