import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/links" activeStyle>
			Links
		</NavLink>
		<NavLink to="/about" activeStyle>
			About Me
		</NavLink>
        <NavLink to="/photos" activeStyle>
			Photos
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Me
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
