import React, { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/auth";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const navbar = user ? (
    <div>
      <Menu pointing secondary size="massive" color="red">
        <Menu.Item
          style={{ color: "red" }}
          name={user.username}
          active
          as={Link}
          to="/"
        />

        <Menu.Menu position="right" color="red">
          <Menu.Item style={{ color: "red" }} name="logout" onClick={logout} />
        </Menu.Menu>
      </Menu>
    </div>
  ) : (
    <div>
      <Menu pointing secondary size="massive" color="red">
        <Menu.Item
          style={{ color: "red" }}
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />

        <Menu.Menu position="right" color="red">
          <Menu.Item
            style={{ color: "red" }}
            name="login"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            style={{ color: "red" }}
            name="register"
            active={activeItem === "register"}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
  return navbar;
}
export default Navbar;
