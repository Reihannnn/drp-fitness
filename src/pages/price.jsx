import CoachSectionCategory from "../components/price/coach";
import MemberCategory from "../components/price/member";
import VisitCategory from "../components/price/visit";

const GymPricing = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-12" id="price">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Harga
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visit Category */}
          <VisitCategory />

          {/* Member Category */}
          <MemberCategory />

          {/* Coach Payment Category */}
          <CoachSectionCategory />
        </div>
      </div>
    </section>
  );
};

export default GymPricing;
