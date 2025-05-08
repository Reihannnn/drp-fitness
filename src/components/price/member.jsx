const MemberCategory = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Member</h3>
        <p className="text-3xl font-bold mb-6">Rp.130.000</p>
        <ul className="space-y-3">
          <li>- Akses full 1 bulan</li>
          <li>- Gratis 1 sesi personal trainer</li>
          <li>- Diskon 10% untuk pembelian suplemen</li>
        </ul>
      </div>
    </div>
  );
};

export default MemberCategory