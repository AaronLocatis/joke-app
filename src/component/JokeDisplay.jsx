import React from "react";

function JokeDisplay({ joke, isFavorite, add, remove }) {
    const { joke_id, title, url } = joke;
    return (
        <div className="gif my-4 px-2 col-6 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
            <h5 className="text-center">{title}</h5>
            <img className="img-fluid" src={url} alt={title} />
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
        </div>
    );
}

export default JokeDisplay;