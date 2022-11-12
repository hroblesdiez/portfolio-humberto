import { Link } from 'react-scroll';


const Navbaritem = ({item, classNameLi, onClick}) => {
  return (
    <li>
      <Link className={classNameLi} to={item.toLowerCase()} smooth={true.toString()} offset={-97} onClick={onClick}>{item}</Link>
    </li>
  )
}

export default Navbaritem