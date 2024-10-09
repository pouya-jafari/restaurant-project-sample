import AnchorLink from "./AnchorLink";
import logoImg from "../assets/tanje_transparent.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logoImg} alt="" className="logo" />
      <ul>
        <li>
          <AnchorLink>Home</AnchorLink>
        </li>
        <li>
          <AnchorLink>Menu</AnchorLink>
        </li>
        <li>
          <AnchorLink>About</AnchorLink>
        </li>
        <li>
          <AnchorLink>Contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
}
