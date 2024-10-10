import AnchorLink from "./AnchorLink";
import logoImg from "../assets/tanje_transparent.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logoImg} alt="" className="logo" />
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-1x fa-home "></i> Home || خانه
          </Link>
        </li>
        <li>
          <AnchorLink link="#">Menu || منو</AnchorLink>
        </li>
        <li>
          <AnchorLink link="#">About || درباره</AnchorLink>
        </li>
        <li>
          <AnchorLink link="#">Contact || تماس بگیرید</AnchorLink>
        </li>
      </ul>
    </div>
  );
}
