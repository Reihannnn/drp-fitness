import { CardPricePersonalTrainerSolo, CardPricePersonalTrainerPaket } from "./CardPricePT"


const h1 = "text-center text-white text-5xl font-bold"

export const PersonalTrainerPrice = () =>{
  return (
    <section className="bg-gray-900 p-12 ">
      <h1 className={h1}>LIST HARGA</h1>
      <h1 className={h1}>PERSONAL TRAINER</h1>
      <hr className="text-white mt-5"/>
      
      {/* card" dari pilihan harga personal trainer*/}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        <CardPricePersonalTrainerSolo sesi = "1 SESI" harga ="50K" date= "sehari"/>
        <CardPricePersonalTrainerSolo sesi = "8 SESI" harga ="368K" date = "sebulan"/>
        <CardPricePersonalTrainerSolo sesi = "14 SESI" harga ="588K" date ="sebulan"/>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <CardPricePersonalTrainerPaket  mabar = "DUO" harga = "650K" sesi = "10 SESI"/>
        <CardPricePersonalTrainerPaket  mabar = "TRIO"  harga = "1000K" sesi = "10 SESI"/>
      </div>
      

    </section>
  )
}