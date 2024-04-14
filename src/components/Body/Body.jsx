import React, { useState } from 'react';
import './Body.css';
import movieList from '../../utils/Constants';
import MovieCard from './MovieCard';

const Body = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 

 
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movieList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="cards">
      <div className="movie-container">
        {currentItems.map((movie) => (
          <MovieCard key={movie.id} name={movie.name} id={movie.id} src={movie.src} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(movieList.length / itemsPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Body;
