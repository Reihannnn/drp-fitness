const HeroPage = () => {
  return (
    <main
      className="bg-black text-white h-screen flex items-center justify-center"
      id="hero"
    >
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584467735871-fb4c2f9b4c3b?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight gradient-text">
            Bangun Kekuatan, Disiplin, dan Percaya Diri —
            <br className="hidden md:block" /> DRP Ada Buat Kamu Sepanjang
            Perjalanan.
          </h1>
          <p className="mt-4 text-lg text-white max-w-xl mx-auto">
            Temukan program latihan yang terarah, dukungan nyata, dan hasil yang
            bisa kamu banggakan.
          </p>
          <a
            href="https://wa.me/6281384334250"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
          >
            <div className="flex items-center gap-3">
              <i class="hgi hgi-stroke hgi-whatsapp"></i> Mulai Sekarang
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default HeroPage;
