import { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='container'>
      <p className='h1style'>Rate your Experience</p>
      <ul>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
              color: star <= (hover || rating) ? 'gold' : 'gray',
              fontSize: '32px',
              cursor: 'pointer',
              margin: '5px',
            }}
            className='star'
          >
            {'\u2605'}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default Star;
