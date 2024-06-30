// import { useState, useEffect } from 'react';
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageCard from "./components/ImageCard/ImageCard";
// import ImageGallery from "./components/ImageCard/ImageCard";
// import ImageModal from "./components/ImageModal/ImageModal";
// import Loader from "./components/Loader/Loader";
// import LoadMoreBtn  from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

function App() {
  const handleSearch = (searchQuery) => {
    console.log('Searching for:', searchQuery);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
