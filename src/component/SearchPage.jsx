import React, { useState, useMemo, useContext, } from 'react'
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
    const { searchResults, } = useContext(SearchContext);
    const { favorites, add, remove } = useContext(FavoritesContext);
    const faveIDs = useMemo(
        () => favorites.map((val) => val.joke_id),
    );





    return (

        <>

            <div className="d-grid gap-2 col-6 mx-auto">
                <h1 className="text-center text h1-increase">Dad Joke Search</h1>

                <input value={search} onChange={(e) => { setSearch(e.target.value) }}
                    onKeyUp={(e) => {
                        console.log(e.key)
                        if (e.key === "Enter") {
                            setUrl("term=" + search);
                            console.log(e)
                        }
                    }}
                    className="input-group input-lg"
                    placeholder="search"
                ></input>
                <button className="btn btn-secondary btn btn-danger" onClick={() => {
                    setUrl("term=" + search);
                }}
                >Search</button>
                <div className="d-grid gap-5 col-6 margin-left">
                    {data && data.map(
                        (val) => {
                            return (
                                <div key={val.id}>
                                    {val.joke}
                                </div>
                            )
                        }
                    )}
                </div>
                <button value={random} onChange={(e) => { setRandom(e.target.value) }}
                    onKeyUp={(e) => {
                        console.log(e.key)
                        if (e.key === "Enter") {
                            setRanUrl("term=" + random);
                            console.log(e)
                        }
                    }}
                ></button>
                <button className="btn btn-secondary btn btn-danger" onClick={() => {
                    setRanUrl("term=");
                }}
                >Get A Random Dad Joke</button>
                <div className="d-grid gap-5 col-6 margin-left">
                    {ranData && ranData.map(
                        (val) => {
                            return (
                                <JokeDisplay key={val.joke}></JokeDisplay>

                            )
                        }
                    )}

                    <div className="d-grid gap-2 col-6 mx-auto">

                        {searchResults &&
                            searchResults.length > 0 &&
                            searchResults.map((val) => (
                                <JokeDisplay
                                    joke={val}
                                    key={val.joke_id}
                                    add={add}
                                    remove={remove}
                                    isFavorite={faveIDs.includes(val.joke_id)}
                                />
                            ))};
                    </div>
                </div>
            </div>
        </>
    );

};

export default SearchPage;