import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import JokeDisplay from "./JokeDisplay";

function FavoritesPage() {
    const { favorites, } = useContext(FavoritesContext);

    return (
        <>
            <h1 className="">Favorites</h1>

            {/* <div className="d-grid gap-5 col-6 margin-left">
                {favorites &&
                    favorites.length > 0 &&
                    favorites.map((val) =>
                        <JokeDisplay
                            joke={val}
                            isFavorite={true}
                        />
                    )}
                {favorites.length === 0 && (
                    <h3 className="text-center">
                        No Favorites. Go Back To Search And Add Some!
                    </h3>
                )}
            </div> */}

        </>
    );
}

export default FavoritesPage;
// import React from 'react'

// const FavoritesPage = () => {
//     return (
//         <div>FavoritesPage</div>
//     )
// }

// export default FavoritesPage