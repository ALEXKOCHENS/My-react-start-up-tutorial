import { useState } from 'react';
import Star from './Star';

const Rating = ({ ProjectHeading }) => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const resetUI = () => {
    setRating(0);
  };
  return (
    <div>
      <p className='h1style'>{ProjectHeading}</p>
      <div className='container'>
        {stars.map((star) => (
          <Star
            hover={hover}
            key={star}
            star={star}
            rating={rating}
            ratingClick={() => setRating(star)}
            hoverClick={() => setHover(star)}
            resetHoverClick={() => setHover(null)}
          />
        ))}
        <p className='rating-paragraph'>
          You rated {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button className='reset-btn' onClick={resetUI} disabled={rating === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Rating;
