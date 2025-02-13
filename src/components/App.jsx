import { useEffect, useState, useCallback } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import '../index.css';

const API_KEY = '47247064-19e7a8e15d0c6618c560e7aa5';
const API_URL = 'https://pixabay.com/api/';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${API_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      setImages((prevImages) => (page === 1 ? data.hits : [...prevImages, ...data.hits]));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearch = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={loadMore} />}
      {modalImage && <Modal image={modalImage} onClose={() => setModalImage(null)} />}
    </div>
  );
};

export default App;
