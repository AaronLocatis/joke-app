import React from "react";

function JokeDisplay({ joke, isFavorite, add, remove }) {

    return (
        <div className="text3">

            <h5 className="text3">{joke.joke}</h5>
            {isFavorite && (
                <button
                    onClick={() => remove(joke)}
                    className="mt-4 btn btn-danger d-block mx-auto"
                >
                    Remove Favorite
                </button>
            )}
            {!isFavorite && (
                <button
                    onClick={() => add(joke)}
                    className="mt-4 btn btn-success text3 d-block mx-auto"
                >
                    Add Favorite
                </button>
            )}
        </div>
    );
}

export default JokeDisplay;