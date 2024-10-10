import AnchorLink from "./AnchorLink";
import logoImg from "../assets/tanje_transparent.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logoImg} alt="" className="logo" />
      <ul>
        <li>
          <AnchorLink link="#">
            <i className="fa fa-1x fa-home "></i> Home || خانه
          </AnchorLink>
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
