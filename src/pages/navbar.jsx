import List_Right_Navbar from "../components/navbar/list-right-navbar";
import drp_logo from "/image/drp_logo.jpg";

const NavigationBar = () => {
  return (
    <>
      <nav className="flex p-5 w-full justify-around items-center sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-md">
        <a href="#hero">
          <section className="font-bold text-2xl flex justify-around items-center gap-5 ">
            <div className="text-white">
              DRP <span className="">FITNESS</span>
            </div>
            <div>
              <img
                src={drp_logo}
                alt="drp-logo"
                className="w-[80px] h-2/4 rounded-full"
              />
            </div>
          </section>
        </a>
        <section className="text-white font-medium p-3">
          <ul className="flex justify-between gap-12 text-xl">
            <List_Right_Navbar list="Price" link = "#price" />
            <List_Right_Navbar list="Mentor" link = "#mentor"/>
            <List_Right_Navbar list="Facility" link = "#facility"/>
            <List_Right_Navbar list="Location" link = "#location"/>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default NavigationBar;
