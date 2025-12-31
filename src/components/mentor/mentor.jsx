import mentor_aji from "/image/aji-mentor.webp";
import mentor_regi from "/image/regi-mentor.webp";

const MentorProfile = (props) => {
  return (
    <>
      <img
        src={props.name == "Aji" ? mentor_aji : mentor_regi}
        alt=""
        className="w-[175px] md:w-[300px] lg:w-[300px] rounded-full"
      />
      <h1 className="text-5xl font-bold">{props.name}</h1>
      <a
        href={
          props.name == "Aji"
            ? "https://www.instagram.com/bangjiwww/"
            : "https://www.instagram.com/atoy.oo/"
        }
      >
        <div className="border p-3 flex gap-3">
          <i class="hgi hgi-stroke hgi-instagram"></i>
          
          <p>instagram</p>
        </div>
      </a>
    </>
  );
};

export default MentorProfile;
