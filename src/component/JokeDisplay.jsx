import React from "react";

function JokeDisplay({ joke, isFavorite, add, remove }) {
    const { joke_id, joke_text } = joke;
    return (
        <>
            <h5 className="text-center">{joke_text}</h5>
            {isFavorite && (
                <button
                    onClick={() => remove(joke_id)}
                    className="mt-4 btn btn-danger d-block mx-auto"
                >
                    Remove Favorite
                </button>
            )}
            {!isFavorite && (
                <button
                    onClick={() => add(joke)}
                    className="mt-4 btn btn-success d-block mx-auto"
                >
                    Add Favorite
                </button>
            )}
        </>
    );
}

export default JokeDisplay;