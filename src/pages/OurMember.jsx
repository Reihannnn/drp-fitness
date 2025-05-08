import MemberImage from "../components/member/memberImage"
import member1 from "/image/member/member1.jpg"
import member2 from "/image/member/member2.jpg"
import member3 from "/image/member/member3.jpg"
import member4 from "/image/member/member4.jpg"
import member5 from "/image/member/member5.jpg"
import member6 from "/image/member/member6.jpg"
import member7 from "/image/member/member7.jpg"
import member8 from "/image/member/member8.jpg"

const member = [member1,member2,member3,member4,member5,member6,member7,member8] 

const MemberPhoto = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Para Member Kami
        </h2>
        <MemberImage member = {member}/>        
      </div>
    </section>
  );
};

export default MemberPhoto
