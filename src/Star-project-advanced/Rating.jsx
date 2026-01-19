import { useState } from 'react';
import Star from './Star';
import Feedback from './Feedback';

const Rating = ({ ProjectHeading, myTitle }) => {
  const stars = [1, 2, 3, 4, 5];
  const users = [
    { id: 1, name: 'alex', rating: 4 },
    { id: 2, name: 'James', rating: 2 },
    { id: 3, name: 'ricky', rating: 1 },
    { id: 4, name: 'kent', rating: 5 },
  ];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const resetRating = () => {
    setRating(0);
  };

  return (
    <div>
      <p className='h1style'>{ProjectHeading}</p>
      <div className='container'>
        <p className='myTitle'>{myTitle}</p>
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
        <p
          className='rating-paragraph'
          style={{
            display: rating === 0 ? 'none' : 'block',
          }}
        >
          You rated Us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button
          className='reset-btn'
          onClick={resetRating}
          disabled={rating === 0}
          style={{
            display: rating === 0 ? 'none' : 'block',
            margin: '7px auto',
          }}
        >
          Reset rating
        </button>
      </div>
      <Feedback users={users} key={users.id} />
    </div>
  );
};

export default Rating;
