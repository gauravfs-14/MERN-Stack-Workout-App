import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <Link to="/">
            <h1>Workout Bruh</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
