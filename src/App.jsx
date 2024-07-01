import { useState, useEffect, useRef } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageCard/ImageCard";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

import { fetchImages } from "../../api/unsplash-api";

function App() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {});

  const handleSearch = (searchQuery) => {
    console.log("Searching for:", searchQuery);
  };

  // const handleImageClick = ({ url, description }) => {
  //   setModalInfo({ isOpen: true, url, description });
  // };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {galleryImages.length > 0 && (
        <>
          <ImageGallery items={galleryImages} onImageClick={handleImageClick} />
          <ErrorMessage />
          <ImageModal />
          <Loader />
          <LoadMoreBtn />
        </>
      )}
    </>
  );
}

export default App;
