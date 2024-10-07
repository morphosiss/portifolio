import Avatar from "/img/avatar.jpg";

interface ICardProfile {
  activity: string;
  pathhImg: string;
  name: string;
  area: string;
  comment: string;
}

const CardProfile: React.FC<ICardProfile> = ({
  activity,
  pathhImg,
  name,
  area,
  comment,
}) => {
  return (
    <div className="from-indigo-800 bg-gradient-to-b rounded-2xl p-5">
      <header className="flex flex-col">
        <div>
          <p className="text-[13px] border border-indigo-600 bg-indigo-900 text-white px-5 py-1 rounded-full inline-block font-medium">
            {area}
          </p>
        </div>
        <div className="flex mt-10 items-center gap-4">
          <img
            src={pathhImg}
            alt="avatar_image"
            className="w-12 h-12 rounded-full ring-4 ring-zinc-700 ring-opacity-20"
          />
          <div>
            <h5 className="text-white leading-none font-medium">{name}</h5>
            <small className="text-indigo-200">{activity}</small>
          </div>
        </div>
      </header>
      <div className="pt-5">
        <p className="text-[14px] text-white">{comment}</p>
      </div>
    </div>
  );
};

const Equipa = () => {
  return (
    <section className="mt-28">
      <header className="flex items-center justify-center relative">
        <h3 className="text-center ring-4 ring-zinc-600 ring-opacity-10 bg-zinc-950 uppercase px-4  py-2 rounded-full absolute text-white">
          Equipa
        </h3>
        <hr className=" bg-zinc-950 border-zinc-950 w-full" />
      </header>

      <div className="max-w-7xl mb-5 gap-4 mt-20 w-full m-auto grid grid-cols-3">
        <CardProfile
          pathhImg={Avatar}
          area="Desenvolvedor Back-end"
          name="Justino Soares"
          activity="CEO - Morphosis"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit in reiciendis adipisci. Impedit vero pariatur distinctio optio facere iste?"
        />
        <CardProfile
          pathhImg={Avatar}
          area="Designer UI/UX & Front-end"
          name="Mário Salembe"
          activity="CEO - Morphosis"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit in reiciendis adipisci. Impedit vero pariatur distinctio optio facere iste?"
        />
        <CardProfile
          pathhImg={Avatar}
          area="Desenvolvedor Back-end"
          name="Romão Quimaliquiza"
          activity="Gestor de Proj. - Morphosis"
          comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit in reiciendis adipisci. Impedit vero pariatur distinctio optio facere iste?"
        />
      </div>
    </section>
  );
};
export default Equipa;
