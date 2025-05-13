const CoachSectionCategorySolo = () => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-2xl lg:text-[0.98rem] font-semibold mb-4 underline underline-offset-4">
          Personal Trainer ( solo )
        </h3>
        <ul className="space-y-6">
          <li className="personal-trainer gap-2">
            <p className="lg:text-lg font-bold">Rp. 50.000</p>
            <p className="text-md font-medium">/ 1 Sesi</p>
          </li>
          <li className="personal-trainer gap-2">
            <p className="lg:text-lg font-bold">Rp. 368.000</p>
            <p className="text-md font-medium"> / 8 Sesi</p>
          </li>
          <li className="personal-trainer gap-2">
            <p className="lg:text-lg font-bold">Rp. 588.000</p>
            <p className="text-md font-medium"> / 14 Sesi</p>
          </li>
        </ul>
        <CoachSectionCategoryDuo/>
        <CoachSectionCategoryTrio/>
      </div>
    </div>
  );
};

export const CoachSectionCategoryDuo = () =>{
  return(
    
      <div className="mt-4">
        <h3 className="text-2xl lg:text-[0.98rem] underline underline-offset-4 font-semibold mb-4">
          Personal Trainer ( Duo )
        </h3>
        <ul className="space-y-6">
          <li className="personal-trainer gap-2">
            <p className="lg:text-lg font-bold">Rp. 650.000</p>
            <p className="text-md font-medium">/ 10 Sesi</p>
          </li>
        </ul>
      </div>
    
  )
}

export const CoachSectionCategoryTrio = () =>{
  return(
    
      <div className="mt-5">
        <h3 className="text-2xl font-semibold lg:text-[0.98rem] mb-4 underline underline-offset-4">
          Personal Trainer ( Trio )
        </h3>
        <ul className="space-y-6">
          <li className="personal-trainer gap-2">
            <p className="lg:text-sm font-bold">Rp. 1.000.000</p>
            <p className="text-md font-medium">/ 10 Sesi</p>
          </li>
        </ul>
      </div>  
  )
}

export default CoachSectionCategorySolo;

