import React, { useState, } from "react";

export const SearchContext = React.createContext(null);

export function SearchProvider(props) {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchContext.Provider value={(searchResults, setSearchResults)}>
            {props.children}
        </SearchContext.Provider>
    );

}