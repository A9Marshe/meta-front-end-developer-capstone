import logo from "../public/assets/logo";
import Nav from "./Nav";
const Header = () => {
  const navEntries = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Orders Online",
    "Login",
  ];
  return (
    <header>
      <img src={logo} />
      <Nav>
        <ul role="navigation">
          {navEntries.map((entry) => {
            return (
              <li key={entry}>
                <a href={`/${entry}`}>{entry}</a>
              </li>
            );
          })}
        </ul>
      </Nav>
    </header>
  );
};
export default Header;
