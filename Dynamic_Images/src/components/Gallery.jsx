import ImageCard from "./ImageCard";
import images from "../imageData";

function Gallery() {
  return (
    <>
      <h1 className="gallery-heading">Image Gallery</h1>
      <div className="gallery-grid">
        {images.map(({ id, url, title, description }) => (
          <ImageCard key={id} url={url} title={title} description={description} />
        ))}
      </div>
    </>
  );
}

export default Gallery;
