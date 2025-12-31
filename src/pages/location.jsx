const LocationSection = () => {
  return (
    <section
      id="location"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-gray-800"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Info */}
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl font-extrabold tracking-tight">
            📍 Lokasi DRP Fitness
          </h2>
          <p className="text-lg text-gray-600">
            Datang dan rasakan pengalaman berolahraga terbaik bersama kami!
            Lokasi strategis, mudah diakses, dan dekat dengan pusat kota.
          </p>
          <div className="space-y-2 text-base">
            <p>🏠 Perumahan GramaPuri Tamansari No. 14 cc, RW.37, Wanasari, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520</p>
            <p>📞 Telepon: +62 859-1353-3987</p>
            <p>🕒 Jam Buka: 08:00 - 22:00 (Senin - Minggu)</p>
          </div>
          <a
            href="https://www.google.com/maps/place/DRP+GYM/@-6.2572083,107.0825477,16.75z/data=!4m6!3m5!1s0x2e698f893e750471:0x6a466b1065a84b7c!8m2!3d-6.2564664!4d107.0827773!16s%2Fg%2F11pvp0ftl0?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-gray-600 transition"
          >
            Lihat di Google Maps
          </a>
        </div>

        {/* Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4716.454298002332!2d107.0825477195417!3d-6.257208341740215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f893e750471%3A0x6a466b1065a84b7c!2sDRP%20GYM!5e0!3m2!1sen!2sid!4v1746668832571!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
