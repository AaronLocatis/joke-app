import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function SearchPage() {
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate();
    const { data } = useAxios(url);

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
                <div className="d-grid gap-2 col-6 mx-auto">
                    {data && data.map(
                        (val) => {
                            return (
                                console.log(data)



                            )
                        }




                    )}



                </div>
                <div>
                    <img src='https://www.pngkey.com/png/full/436-4362088_dad-clipart-daddy-standing-01-clip-art-at.png'></img>
                </div>

            </div>
        </>
    );

}

export default SearchPage;