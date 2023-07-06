import './burgerMenu.css';
import { NavLink as Link } from "react-router-dom";

// class="burgerMenu"

function showMe() {
var chboxs = document.getElementById("toggle").checked;
var vis = "none";
    if(chboxs){
    vis = "none"; }
    else{
    vis = "flex"; }
document.getElementById("cards").style.display = vis;
}

const BurgerMenu = () => {

    return (
        <div class="burgerMenu">
        <input id="toggle" type="checkbox" class="bugerbox" onChange={showMe}></input>

        <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
        </label>

        <div class="burger-nav">
            <div class="burger-wrapper">
                <nav class="nav-burger-nav">
                    <Link to="/">Home</Link><br />
                    <Link to="/about">About Me</Link><br />
                    <Link to="/contact">Contact Me</Link><br />
                </nav>
            </div>
        </div>
        </div>
    );
}

export default BurgerMenu;