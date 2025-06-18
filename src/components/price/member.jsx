const MemberCategory = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4 lg:text-[1.4rem] underline underline-offset-8">
          Member ( solo )
        </h3>
        <p className="text-3xl font-bold mb-2">Rp.155.000</p>
        <ul className="space-y-2">
          <li>- Akses full 1 bulan menjadi member</li>
          <li>- Connected to komunitas yang solid, satu tujuan</li>
        </ul>

        <br />
      </div>
    </div>
  );
};

export const MemberCategorySquad = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4 lg:text-[0.846rem] underline underline-offset-8">
          Member ( Squad / 4 orang)
        </h3>
        <p className="text-3xl font-bold mb-2">Rp.520.000</p>
        <ul className="space-y-2">
          <li>- Akses full 1 bulan menjadi member</li>
          <li>- Connected to komunitas yang solid, satu tujuan</li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCategory;
