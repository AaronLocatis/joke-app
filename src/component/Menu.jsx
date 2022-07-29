import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () => {

    return (
        <header className="navbar navbar-expand-lg">
            <div className="container-fluid">



                {/* <div>
                    <NavLink
                        to="/search"
                        className="links"
                    >
                        <h3>Search Dad Jokes</h3>
                    </NavLink>
                </div> */}
                <div>
                    <NavLink
                        to="/enter"
                        className="links"
                    >
                        <h3>Home</h3>
                    </NavLink>
                </div>


                <div>
                    <NavLink
                        to="/favorites"
                        className="links"

                    >
                        <h3>Favorites</h3>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
export default Menu;