import { Senam, CardPrice, Visit, Boxing } from "./CardPriceMember";
import priceList from "/image/pricelist2-drp.jpeg";

const PriceNew = () => {
  return (
    <section id="price" className=" bg-gray-200 p-10 lg:p-16 flex justify-center">
      <img src={priceList} alt="daftar harga drp fitness gym cibitung" className="md:w-[42.5%] w-[95%]"/>
    </section>
  );
};

export default PriceNew;
