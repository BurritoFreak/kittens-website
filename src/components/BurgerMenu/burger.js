import './burgerMenu.css';
import { NavLink as Link } from "react-router-dom";

// class="burgerMenu"

const BurgerMenu = () => {

    return (
        <div class="burgerMenu">
        <input id="toggle" type="checkbox"></input>

        <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
        </label>

        <div class="burger-nav">
            <div class="burger-wrapper">
                <nav class="nav-burger-nav">
                    <Link to="/">Home</Link><br />
                    <Link to="/links">Links</Link><br />
                    <Link to="/about">About Me</Link><br />
                    <Link to="/contact">Contact Me</Link><br />
                </nav>
            </div>
        </div>
        </div>
    );
}

export default BurgerMenu;