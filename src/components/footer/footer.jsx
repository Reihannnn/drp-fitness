import drpLogo from "/image/drp_logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// @All Copyright 2025, FTL GYM. All Rights Reserved.
const Footer = () => {
  return (
    <>
      <section
        className="md:h-[65vh] md:p-15 w-full bg-black text-white gap-8 p-10 pb-20"
        id="footer"
      >
        <section className="md:w-[95%] md:m-auto flex md:justify-around md:flex-row flex-col justify-start w-full">
          <div className="">
            <div className="flex gap-5 items-center">
              <img
                src={drpLogo}
                alt="logo gym drp fitness"
                className="w-[85px] h-[95px]"
              />
              <h1 className="text-2xl font-extrabold">DRP FITNESS</h1>
            </div>

            <div className="mt-8">
              <h1 className="lg:text-2xl font-bold">Jam buka </h1>
              <h1 className="lg:text-lg">Setiap hari | 08:00 - 22:00 WIB</h1>
            </div>
            {/* nomor whatsapp  */}
            <div className="mt-8">
              <h1 className="lg:text-2xl font-bold">Whatsapp</h1>
              <h1 className="lg:text-lg">+62 813-8433-4250</h1>
            </div>
          </div>

          {/* about */}
          <div className="lg:ml-5 sm:ml-0 mt-7">
            <h1 className="text-3xl font-bold ">About us</h1>
            <div className="mt-5">
              <a href="https://maps.app.goo.gl/wSUVqo6LqVXFy7Zd6">
                <h1 className="text-xl mb-4">Location</h1>
              </a>
              <div className="flex items-center gap-2">
                <a href="https://wa.me/6281384334250">
                  <h1 className="text-xl">Contact us</h1>
                </a>
                <a href="https://wa.me/6281384334250">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-white text-2xl"
                  />{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="lg:ml-5 sm:ml-0 mt-7">
            <h1 className="text-3xl font-bold ">Program</h1>
            <div className="mt-5">
              <h1 className="text-xl mb-4">Membership</h1>
              <h1 className="text-xl mb-4">Senam</h1>
              <h1 className="text-xl mb-4">Boxing & Muaythai</h1>
              <h1 className="text-xl mb-4">Personal Trainer (Gym)</h1>
            </div>
          </div>

          {/* Social media */}
          <div className="lg:ml-5 sm:ml-0 mt-7">
            <h1 className="text-3xl font-bold ">Social Media</h1>
            <div className="flex">
              {/* Social Media  */}
              {/* List Social Media */}
              <div className="flex mt-5 gap-3">
                <a href="https://www.instagram.com/drpfitness21/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-2xl p-2 border rounded-full"
                  />{" "}
                </a>
                <a href="https://www.tiktok.com/@drpfitness21">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="text-white text-2xl p-2 border rounded-full"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* copyrigth */}
      <section className="w-full p-4">
        <h1 className="text-center">
          @All Copyright 2026, DRP Fitness GYM. All Rights Reserved.
        </h1>
      </section>
    </>
  );
};

export default Footer;
