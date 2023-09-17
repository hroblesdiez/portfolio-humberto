import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbaritem = ({ item, classNameLi, onClick }) => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -97;
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: "smooth",
    });
  };

  return (
    <li>
      {item === "Blog" && <NavLink to="/blog">{item}</NavLink>}

      {item !== "Blog" && (
        <HashLink
          className={classNameLi}
          scroll={(el) => scrollWidthOffset(el)}
          to={"/#" + item.toLowerCase()}
          onClick={onClick}
        >
          {item}
        </HashLink>
      )}
    </li>
  );
};

export default Navbaritem;
