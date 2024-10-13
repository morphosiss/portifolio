import ImageLogo from "/img/logo.png";

const Footer = () => {
  return (
    <footer className="w-full mt-36 py-5 bg-gradient-to-b from-transparent to-zinc-950">
      <div className="w-full max-w-6xl m-auto grid paisagem-tablet:grid-cols-3 grid-cols-1 ">
        <div className="">
          <h6 className="text-zinc-600 pb-6 paisagem-tablet:text-start text-center">Links</h6>
          <ul className="flex flex-col paisagem-tablet:items-start justify-center items-center gap-5">
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Foco
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Serviços
              </a>
            </li>
          </ul>
        </div>
        <div className="paisagem-tablet:pt-0 pt-10">
          <h6 className="text-zinc-600 pb-6 paisagem-tablet:text-start text-center">Links</h6>
          <ul className="flex flex-col paisagem-tablet:items-start justify-center items-center gap-5">
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Equipa
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Patrocine
              </a>
            </li>
          </ul>
        </div>
        <div className="paisagem-tablet:pt-0 pt-10">
          <h6 className="text-zinc-600 pb-6 paisagem-tablet:text-start text-center">Redes Sociais</h6>
          <ul className="flex flex-col paisagem-tablet:items-start justify-center items-center gap-5">
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                E-mail
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-white transition-all hover:underline">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-5 flex paisagem-tablet:flex-row flex-col paisagem-tablet:gap-0 gap-4 items-center justify-between border-t max-w-6xl w-full mx-auto mt-7 border-zinc-800 ">
        <img src={ImageLogo} alt="logotipo_morphosis" className="w-32" />
        <p className="text-zinc-600">&copy; Morphosis - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
