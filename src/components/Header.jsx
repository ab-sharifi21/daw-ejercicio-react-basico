import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>My Logo</h1>
      </Link>
      <nav>
        <Link to="/">Home - Image</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/color">Color</Link>
        <Link to="/buttons">Buttons</Link>
        <Link to="/message">Show Message</Link>
      </nav>
    </header>
  );
}

export default Header;
