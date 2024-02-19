const Nav = () => {
  const navEntries = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Orders Online",
    "Login",
  ];
  return (
    <nav>
      <ul role="navigation">
        {navEntries.map((entry) => {
          return (
            <li key={entry}>
              <a href={`/${entry}`}>{entry}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
