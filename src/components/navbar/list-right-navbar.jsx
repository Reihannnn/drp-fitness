const List_Right_Navbar = (props) => {
  return (
    <a href={props.link}>
      <li className="transition ease-in-out hover:-translate-y-1 hover:scale-125 hover:underline">
        {props.list}
      </li>
    </a>
  );
};

export default List_Right_Navbar
