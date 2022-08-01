import React, { useState, useCallback, createContext } from "react";

export const FavoritesContext = createContext(null);

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    const add = useCallback(
        (joke) => setFavorites((curr) => [...curr, joke]),
        [setFavorites]
    );

    const remove = useCallback(
        (id) => {
            setFavorites((curr) => curr.filter((val) => val.joke_id !== id));
        },
        [setFavorites]
    );

    const clear = useCallback(() => {
        setFavorites([]);
    }, [setFavorites]);

    return (
        <FavoritesContext.Provider value={{ favorites }}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
