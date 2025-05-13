const DetailReview = (props) => {
  return (

    <section className="h-screen bg-black">
      <section className="w-5/6 m-auto">
        <h1 className="text-4xl md:text-5xl text-white text-center font-bold p-8">Review Customer</h1>

        <div className="flex justify-around gap-5 flex-wrap">
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
        </div>
        
        <div className="flex justify-around gap-5 flex-wrap mt-5 ">
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
          <div className="bg-white h-[200px] w-[300px] rounded-2xl"></div>
        </div>
      </section>
    </section>
  );
};

export default DetailReview;
