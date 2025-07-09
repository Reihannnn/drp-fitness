// variable global in this file
const container =
  "p-4 h-[400px] w-[320px] bg-gray-700 rounded-3xl flex flex-col justify-between text-white";

export const CardPrice = (props) => {
  return (
    <div className={container}>
      <div>
        <h1 className="text-4xl m-2 font-bold text-amber-400 text-center p-2">
          {props.kategori}
        </h1>
        <hr className="text-amber-300" />
        <p className="text-center m-4 text-xl">
          {" "}
          Akses full 1 bulan menjadi member
        </p>
        <br />
        <p className="text-center text-xl">
          Conntected to komunitas yang solid satu tujuan
        </p>
      </div>
      <h1 className="text-center text-4xl text-amber-400 font-bold">
        {props.harga}
      </h1>
    </div>
  );
};

export const Senam = (props) => {
  return (
    <div className={container}>
      <div>
        <h1 className="text-4xl m-2 font-bold text-amber-400 text-center p-2">
          {props.kategori}
        </h1>
        <hr className="text-amber-300" />
        <p className="text-center mt-4 text-3xl"> Aerobik = 20k</p>
        <br />
        <p className="text-center text-3xl">Salsa = 25k</p>
      </div>
      <h1 className="text-center text-4xl text-amber-400 font-bold">
        {props.harga}
      </h1>
    </div>
  );
};

export const Visit = (props) => {
  return (
    <div className={container}>
      <div>
        <h1 className="text-4xl m-2 font-bold text-amber-400 text-center p-2">
          {props.kategori}
        </h1>
        <hr className="text-amber-300" />

        <p className="text-center m-4 text-2xl">
          {" "}
          Akses full 1 hari kedatangan
        </p>
      </div>
      <h1 className="text-center text-4xl text-amber-400 font-bold">
        {props.harga}
      </h1>
    </div>
  );
};
