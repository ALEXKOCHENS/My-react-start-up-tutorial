import { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='paragraph'>
      <p className='h1style'>Rate your Experience</p>

      <ul>
        {stars.map((star) => (
          <span
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            key={star}
            className='star-span'
          >
            {'\u2605'}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default Star;
