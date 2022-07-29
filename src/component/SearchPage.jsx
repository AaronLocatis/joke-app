import React, { useState } from 'react'
import useAxios from "../hooks/useAxios";
import useAxiosRan from "../hooks/useAxiosRan";

function SearchPage() {
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState("");
    const { data } = useAxios(url);
    const [ranUrl, setRanUrl] = useState("");
    const { ranData } = useAxiosRan(ranUrl);
    const [random, setRandom] = useState("");


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
                            setRanUrl(random);
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
                                <div key={val.id}>
                                    {val.joke}
                                </div>
                            )
                        }
                    )}
                </div>
                {/* <div className="d-grid gap-2 col-6 mx-auto">
                    {error && error}
                    {searchResults &&
                        searchResults.length > 0 &&
                        searchResults.map((j) => (
                            <JokeDisplay
                                joke={j}
                                key={j.joke_id}
                                add={add}
                                remove={remove}
                                isFavorite={faveIDs.includes(j.joke_id)}
                            />
                        ))}; */}

            </div>
        </>
    );

}

export default SearchPage;