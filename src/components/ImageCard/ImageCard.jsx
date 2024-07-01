//import css from "./ImageCard.module.css";

const ImageCard = (url, description, onImageClick) => {
  return (
    <>
      <div>
        <img src={url} alt={description} onClick={onImageClick} />
      </div>
    </>
  );
};

export default ImageCard;
