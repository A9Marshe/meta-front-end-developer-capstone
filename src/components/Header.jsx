import logo from "../public/assets/logo";
import Nav from "./Nav";
const Header = () => {
  return (
    <header>
      <img src={logo} />
      <Nav />
    </header>
  );
};
export default Header;
