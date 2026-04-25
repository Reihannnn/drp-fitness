const HeroPage = () => {
  return (
    <main className="text-white h-screen flex items-center justify-center" id="hero">
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/image/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay biar teks tetap kebaca */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
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
            className="inline-block mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
          >
            <div className="flex items-center gap-3">
              <i className="hgi hgi-stroke hgi-whatsapp"></i>
              Mulai Sekarang
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default HeroPage;