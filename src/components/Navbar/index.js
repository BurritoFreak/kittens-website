import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<div className="Logo">
			<image src="public\Logo.png" alt="EmoKitten_xoxo" width="500px" height="500px"/>
			<h1 className="Name">EmoKitten_xoxo</h1>
		</div>
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
