import MentorProfile from "../components/mentor/mentor";

const CoachSection = () => {
  return (
    <>
      <section
        className="md:flex lg:flex bg-black text-white p-5 pb-20 justify-center gap-8"
        id="mentor"
      >
        <section className="ml-10 md:w-2/5">
          <h1 className="text-center md:text-left text-white leading-tight text-3xl md:text-7xl font-bold gradient-text">
            Progress Bersama Mentor
          </h1>
          <p className="text-center md:text-left lg:text-left text-xl md:text-2xl leading-normal mt-5 ml-1.5">
            Kita gak cuma angkat beban di gym — kita angkat kepercayaan diri,
            konsistensi, dan standar hidup lo ke level baru.
          </p>

          <div className="p-2 mt-4 flex justify-center md:justify-start "> 
            <a href="#price">
              <button className="p-3 bg-blue-600 w-[125px] font-bold rounded-2xl text-xl">Join</button>
            </a>
          </div>
        </section>
        <section className="flex text-white p-5 justify-around w-full md:w-3/5 lg:w-3/5">
          <div className="flex flex-col gap-5 items-center">
            <MentorProfile name="Aji" />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <MentorProfile name="Regi" />
          </div>
        </section>
      </section>
    </>
  );
};

export default CoachSection;
