import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.scss";

export default function App() {
  const [albums, setAlbums] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [perPage, setperPage] = useState(5);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setAlbums(response.data));
  }, []);

  const up = pageNumber * perPage;
  const down = up + perPage;

  const displayAlbums = albums.slice(up, down).map((album) => {
    return (
      <div className="album" key={album.id}>
        <h1>{album.title}</h1>
      </div>
    );
  });

  const pageCount = Math.ceil(albums.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="albums">
      {displayAlbums}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
