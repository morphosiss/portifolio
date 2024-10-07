import { Instagram, MailOpen, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="mt-36 max-w-5xl w-full m-auto grid grid-cols-5 gap-5">
      <header className="col-span-3 pe-3">
        <h6 className="text-white text-3xl">Contacte-nos, vamos etendé-lo!</h6>
        <p className="text-zinc-300 pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident in
          ad hic, nesciunt, nemo repudiandae ullam quisquam placeat dolores
          tempora nihil laborum molestiae optio. Libero qui id quas laborum
          eligendi.
        </p>
      </header>
      <div className="flex flex-col col-span-2 gap-4">
        <a
          href="#"
          className="text-white justify-center transition-all hover:bg-indigo-700 font-medium py-2.5 rounded-lg gap-3 flex items-center bg-indigo-600 ring-4 ring-violet-400 ring-opacity-15"
        >
          Email <MailOpen size={19} />
        </a>
        <a
          href="#"
          className="text-white justify-center transition-all hover:bg-indigo-700 font-medium py-2.5 rounded-lg gap-3 flex items-center bg-indigo-600 ring-4 ring-violet-400 ring-opacity-15"
        >
          Instagram <Instagram size={19} />
        </a>
        <a
          href="#"
          className="text-white justify-center transition-all hover:bg-indigo-700 font-medium py-2.5 rounded-lg gap-3 flex items-center bg-indigo-600 ring-4 ring-violet-400 ring-opacity-15"
        >
          Whatsapp <MessageCircle size={19} />
        </a>
      </div>
    </section>
  );
};
export default Contact;
