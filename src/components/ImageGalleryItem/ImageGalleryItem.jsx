import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onClick(largeImage)}>
      <img
        className={styles.ImageGalleryItemImage}
        src={smallImage}
        alt="Gallery item"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

