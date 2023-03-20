import { clients } from "../constants";
import styles, { layout } from "../style";

const Clients = () => (
  <section className={`flex justify-evenly items-center flex-wrap`}>
    {clients.map((client) => (
      <div key={client.id} className="sm:mx-10 mx-5 my-5">
        <img
          className="sm:w-[192px] w-[100px] object-contain cursor-pointer filter hover:brightness-200 hover:contrast-200"
          src={client.logo}
          alt="client_logo"
        />
      </div>
    ))}
  </section>
);

export default Clients;
