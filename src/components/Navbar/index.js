import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/kittens-website/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/kittens-website/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/kittens-website/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/kittens-website/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/kittens-website/sign-up" activeStyle>
			Sign Up
		</NavLink>
        <NavLink to="/kittens-website/photos" activeStyle>
			Photos
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
