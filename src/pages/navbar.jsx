import { useState } from "react";
import List_Right_Navbar from "../components/navbar/list-right-navbar";
import drp_logo from "/image/drp_logo.jpg";
import { Menu, X } from "lucide-react"; // gunakan icon lucide atau fontawesome

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={drp_logo}
            alt="drp-logo"
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <div className="text-white text-xl font-bold tracking-wide gradient-text">
            DRP <span className="">FITNESS</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          <List_Right_Navbar list="Price" link="#price" />
          <List_Right_Navbar list="Mentor" link="#mentor" />
          <List_Right_Navbar list="Facility" link="#facility" />
          <List_Right_Navbar list="Location" link="#location" />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <ul className="flex flex-col gap-4 text-white text-lg font-medium p-4">
            <List_Right_Navbar list="Price" link="#price" />
            <List_Right_Navbar list="Mentor" link="#mentor" />
            <List_Right_Navbar list="Facility" link="#facility" />
            <List_Right_Navbar list="Location" link="#location" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
