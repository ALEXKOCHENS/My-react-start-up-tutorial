import { useState } from 'react';
import Star from './Star';

const Rating = ({ ProjectHeading }) => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const resetUI = () => {
    setRating(0);
  };
  return (
    <div>
      <p className='h1style'>{ProjectHeading}</p>
      <div className='container'>
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            ratingClick={() => setRating(star)}
          />
        ))}
        <p>
          You rated {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button className='reset-btn' onClick={resetUI}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Rating;
