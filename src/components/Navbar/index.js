import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
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
		<NavLink to="/games" activestyle>
			Games
		</NavLink>
		<NavLink to="/test" activestyle>
			Test
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
