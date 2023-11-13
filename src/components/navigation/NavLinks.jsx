import "./Navigation.css";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <a href="/">home</a>
      </li>
      <li>
        <a href="/venues">venues</a>
      </li>
      <li>
        <a href="/profile">profile</a>
      </li>
      <li>
        <a href="/calendar">calendar</a>
      </li>
      <button className="button_purple">logout</button>
    </ul>
  );
};

export default NavLinks;

/*

export const NavLinksLoggedOut = () => {
  return (
    <ul>
      <li>
        <a href="/">home</a>
      </li>
      <button className="login_button">login</button>
      <button className="register_button">register</button>
    </ul>
  );
};

*/
