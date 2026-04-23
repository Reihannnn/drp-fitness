import { CardPricePersonalTrainerSolo, CardPricePersonalTrainerPaket } from "./CardPricePT"


const h1 = "text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold"

export const PersonalTrainerPrice = () =>{
  return (
    <section className="bg-gray-900 px-5 py-20 md:p-14 lg:p-25 ">
      <h1 className={h1}>LIST HARGA</h1>
      <h1 className={h1}>PERSONAL TRAINER</h1>
      
      {/* card" dari pilihan harga personal trainer*/}
      <div className="w-full lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 gap-y-0 mt-10">
        <CardPricePersonalTrainerSolo sesi = "1 SESI" harga ="50K" date= "sehari"/>
        <CardPricePersonalTrainerSolo sesi = "8 SESI" harga ="368K" date = "sebulan"/>
        <CardPricePersonalTrainerSolo sesi = "14 SESI" harga ="588K" date ="sebulan"/>
      </div>

      <div className="w-full lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center mt-3 gap-5">
        <CardPricePersonalTrainerPaket  mabar = "DUO" harga = "650K" sesi = "10 SESI"/>
        <CardPricePersonalTrainerPaket  mabar = "TRIO"  harga = "1000K" sesi = "10 SESI"/>
      </div>
      

    </section>
  )
}