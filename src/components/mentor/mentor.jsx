import mentor_aji from "/image/aji-mentor.webp";
import mentor_regi from "/image/regi2-mentor.jpeg";

const MentorProfile = (props) => {
  return (
    <>
      <img
        src={props.name == "Aji" ? mentor_aji : mentor_regi}
        alt="Para mentor drp fitness gym cibitung"
        className="w-[250px] h-[225px] lg:w-[350px] lg:h-[350px] object-cover object-top rounded-full"
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
