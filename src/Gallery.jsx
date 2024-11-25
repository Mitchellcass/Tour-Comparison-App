import React, { useState, useEffect } from 'react';


function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data
  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <p>{tour.price}</p>
          <p>{tour.description}</p>
          <button onClick={() => handleRemoveTour(tour.id)}>Not Interested</button>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

const handleRemoveTour = (tourId) => {
    // eslint-disable-next-line no-undef
    setTours(tours.filter((tour) => tour.id !== tourId));
  };
  