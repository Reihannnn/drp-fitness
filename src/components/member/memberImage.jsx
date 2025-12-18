const MemberImage = (props) =>{
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[...props.member].map((image, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={image}
                alt={`Member ${i + 1}`}
                className={`w-full h-48 object-cover  ${i + 1 === 4 ? `object-top`  : `object-center`}`}
              />
              <div className="bg-white p-2 text-center text-black font-medium">
                Member {i + 1}
              </div>
            </div>
          ))}
        </div>
  )
}

export default MemberImage;