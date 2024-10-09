import AnchorLink from "./AnchorLink";
import logoImg from "../assets/tanje_transparent.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logoImg} alt="" className="logo" />
      <ul>
        <li>
          <AnchorLink>Home || خانه</AnchorLink>
        </li>
        <li>
          <AnchorLink>Menu || منو</AnchorLink>
        </li>
        <li>
          <AnchorLink>About || درباره</AnchorLink>
        </li>
        <li>
          <AnchorLink>Contact || تماس بگیرید</AnchorLink>
        </li>
      </ul>
    </div>
  );
}
