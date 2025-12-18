import { Senam, CardPrice, Visit } from "./CardPriceMember";

const PriceNew = () => {
  return (
    <section className=" bg-gray-900 p-16">
      <div className="p-5">
        <h1 className="text-3xl font-semibold text-center text-white">
          DRP FITNESS
        </h1>
        <h1 className="text-6xl font-bold text-center text-amber-400">
          PRICE LIST
        </h1>
      </div>

      <hr className="text-amber-400 m-2 "/>

      <div className="flex gap-5 flex-wrap justify-center p-5">
        <CardPrice kategori="1 BULAN" harga="Rp. 155.000" />
        <Senam kategori="Senam" harga="One Time" />
        <Visit kategori="Visit" harga="Rp. 30.000" />
      </div>
    </section>
  );
};

export default PriceNew;
