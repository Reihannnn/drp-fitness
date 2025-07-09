export const CardPricePersonalTrainerSolo = (props) => {
  return (
    <div className="w-[275px] rounded-4xl bg-black border-white border-3 p-3 py-10 mt-5">
      <h1 className="text-white font-bold text-5xl">PT (SOLO)</h1>
      <h1 className="text-3xl text-white mt-5 mb-5 font-semibold">
        {props.sesi}
      </h1>

      <div className="bg-yellow-400 flex justify-between rounded-xl p-5 items-center gap-3">
        <p className="text-md font-semibold">pertemuan dalam {props.date}</p>
        <h1 className="text-3xl font-extrabold">{props.harga}</h1>
      </div>
    </div>
  );
};

export const CardPricePersonalTrainerPaket = (props) => {
  return (
    <div className="w-[320px] bg-white rounded-2xl p-4 mt-4">
      <div className="p-1">
        <h1 className="text-5xl font-extrabold ">PAKET</h1>
        <h1 className="text-5xl font-extrabold mb-3">PT ( {props.mabar} )</h1>
      </div>
      <div className="bg-yellow-400 flex justify-between rounded-xl p-5 items-center gap-3">
        <p className="text-md font-semibold">
          <span className="block font-extrabold text-2xl italic">{props.sesi}</span> pertemuan dalam sebulan
        </p>
        <h1 className="text-3xl font-extrabold">{props.harga}</h1>
      </div>
    </div>
  );
};
