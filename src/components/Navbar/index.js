import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<div className="Logo">
			<a className="homebutton" href="/">
				<img className="homebutton" src="https://cdn.discordapp.com/attachments/1049430258287386711/1073362080167637043/Logo.png" alt=""/>
			</a>
			<h1 className="Name">EmoKitten_xoxo</h1>
		</div>
		<NavMenu>
			<NavLink to="/" activestyle>
				Home
			</NavLink>
			<NavLink to="/about" activestyle>
				About Me
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
