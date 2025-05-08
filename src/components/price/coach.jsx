const CoachSectionCategory = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Bayar Coach</h3>
        <ul className="space-y-6">
          <li>
            <p className="text-xl font-medium">1 Hari</p>
            <p className="text-2xl font-bold">Rp.25.000</p>
          </li>
          <li>
            <p className="text-xl font-medium">1 Bulan</p>
            <p className="text-2xl font-bold">Rp.500.000</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoachSectionCategory
