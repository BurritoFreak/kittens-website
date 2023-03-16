import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
	<h1 className="Name">EmoKitten_xoxo</h1>
		<NavMenu>
        <NavLink to="/" activestyle>
			Home
		</NavLink>
		<NavLink to="/links" activestyle>
			Links
		</NavLink>
		<NavLink to="/about" activestyle>
			About Me
		</NavLink>
        <NavLink to="/photos" activestyle>
			Photos
		</NavLink>
		<NavLink to="/contact" activestyle>
			Contact Me
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
