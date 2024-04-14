import React, { useState, useEffect } from 'react';
import movieList from '../../utils/Constants';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const Data = Array.from({ length: 50 }, (_, index) => index + 1);
    setData(Data);
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
      <button onClick={handleNextPage} disabled={indexOfLastItem >= data.length}>Next Page</button>
    </div>
  );
};

export default Pagination;
