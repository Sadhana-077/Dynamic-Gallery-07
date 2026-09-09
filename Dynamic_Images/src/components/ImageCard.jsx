import PropTypes from "prop-types";

function ImageCard({ url, title, description }) {
  return (
    <div className="image-card">
      <img className="image-card__img" src={url} alt={title} loading="lazy" />
      <div className="image-card__body">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageCard;
