import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <div className="NavBar">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/new">Add New Page</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
