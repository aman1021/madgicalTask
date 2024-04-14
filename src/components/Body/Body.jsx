// import './Body.css'
// import { useState } from 'react'
// import movieList from '../../utils/Constants'
// import MovieCard from './MovieCard'
// const Body = () => {


//     return(
//         <div className="cards">
//             <div className="movie-container">
//                 {movieList.map((movie) => (
//                      <MovieCard key={movie.id} name={movie.name} id={movie.id} src={movie.src} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Body

import React, { useState } from 'react';
import './Body.css';
import movieList from '../../utils/Constants';
import MovieCard from './MovieCard';

const Body = () => {
  // Define pagination state variables
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of movie cards per page

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Get the current items to display based on pagination
  const currentItems = movieList.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="cards">
      <div className="movie-container">
        {currentItems.map((movie) => (
          <MovieCard key={movie.id} name={movie.name} id={movie.id} src={movie.src} />
        ))}
      </div>
      {/* Pagination buttons */}
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
