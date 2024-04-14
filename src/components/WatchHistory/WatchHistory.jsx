import React from "react";
import MovieCard from "../Body/MovieCard";

const WatchHistory = () => {
    const history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length === 0) {
        return <h1>No history found</h1>;
    }

    return (
        <div className="movie-container">
            {history.map((movie) => (
                <MovieCard key={movie.id} name={movie.name} id={movie.id} src={movie.src} />
            ))}
        </div>
    );
};

export default WatchHistory;