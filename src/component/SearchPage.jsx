import React, { useState, useMemo, useContext, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import useAxiosRan from "../hooks/useAxiosRan";
import { FavoritesContext } from "../context/FavoritesContext";
import JokeDisplay from "./JokeDisplay";
import { SearchContext } from "../context/SearchContext";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const { data } = useAxios(url);
  const [ranUrl, setRanUrl] = useState("");
  const { ranData } = useAxiosRan(ranUrl);
  const [random, setRandom] = useState("");
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const { favorites, add, remove } = useContext(FavoritesContext);
  const faveIDs = useMemo(() => favorites.map((val) => val.id), [favorites]);

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data, setSearchResults]);

  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <h1 className="text-center text h1-increase">Dad Joke Search</h1>

        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              setUrl("term=" + search);
              console.log(e);
            }
          }}
          className="input-group input-lg"
          placeholder="search"
        ></input>
        <button
          className="btn btn-secondary btn btn-danger"
          onClick={() => {
            setUrl("term=" + search);
          }}
        >
          Search
        </button>
      </div>

      <div className="">
        <div className="d-grid gap-5 col-6">
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((val) => (
              <JokeDisplay
                joke={val}
                key={val.id}
                add={add}
                remove={remove}
                isFavorite={faveIDs.includes(val.id)}
              />
            ))}
          ;
        </div>
      </div>
    </>
  );
}

export default SearchPage;
