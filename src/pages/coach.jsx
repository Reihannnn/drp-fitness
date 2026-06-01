import MentorProfile from "../components/mentor/mentor";

const CoachSection = () => {
  return (
    <>
      <section
        className="bg-black"
        id="mentor"
      >
        <section
          className="h-[100vh] w-4/5 mx-auto md:flex lg:flex bg-black text-white pt-25  items-center justify-center gap-8"          
        >
          <section className="ml-0 mb-8 lg:ml-5 lg:mb-0 md:w-2/5">
            <h1 className="text-center md:text-left text-white text-3xl md:text-6xl font-bold gradient-text">
              Progress Bersama Mentor
            </h1>
            <p className="text-center md:text-left lg:text-left text-xl md:text-2xl leading-normal mt-5 ml-1.5">
              Kita gak cuma angkat beban di gym — kita angkat kepercayaan diri,
              konsistensi, dan standar hidup lo ke level baru.
            </p>

            <div className="p-2 mt-4 flex justify-center md:justify-start ">
              <a href="#price">
                <button className="p-3 bg-blue-600 w-[125px] font-bold rounded-xl text-lg lg:text-xl hover:cursor-pointer">
                  Join
                </button>
              </a>
            </div>
          </section>
          <section className="flex gap-2 text-white w-full justify-around md:w-3/5 lg:3/6">
            <div className="flex flex-col gap-5 items-center">
              <MentorProfile name="Aji" />
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default CoachSection;
