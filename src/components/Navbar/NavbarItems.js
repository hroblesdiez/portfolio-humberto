import Navbaritem from "./Navbaritem";

const NavbarItems = ({ classNameUl, classNameLi, item, onClick }) => {
  const ITEMS = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];

  return (
    <ul className={classNameUl}>
      {ITEMS.map((item) => (
        <Navbaritem
          key={item}
          item={item}
          classNameLi={classNameLi}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default NavbarItems;
