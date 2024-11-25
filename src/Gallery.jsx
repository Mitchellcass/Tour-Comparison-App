import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [tours, setTours] = useState([]);  // Tour data
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    // Fetch data
    fetch('https://course-api.com/react-tours-project')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTours(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError('Failed to fetch data'); 
        setLoading(false);  
      });
  }, []); 

  if (loading) {
    return <p>Loading...</p>;  
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <p>{tour.price}</p>
          <p>{tour.description}</p>
          <button>Not Interested</button>
          <button>Read More / Show Less</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
