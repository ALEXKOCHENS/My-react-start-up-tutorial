import { useState } from 'react';
import Star from './Star';
import Feedback from './Feedback';
import Button from './Button';

const Rating = ({ ProjectHeading, myTitle }) => {
  const stars = [1, 2, 3, 4, 5];
  const users = [
    { id: 1, name: 'alex' },
    { id: 2, name: 'James' },
    { id: 3, name: 'ricky' },
    { id: 4, name: 'kent' },
  ];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedBack, setFeedback] = useState(false);
  const setUserRating = () => {
    setRating(rating);
    setFeedback(true);
  };
  const reset = () => {
    setFeedback(false);
    setRating(0);
    setHover(0);
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
          {rating} star{rating > 1 ? 's' : ''} rated
        </p>
        {/* <button
          className='reset-btn'
          onClick={setUserRating}
          disabled={rating === 0}
          
        >
          Set rating
        </button> */}

        <Button
          className='reset-btn'
          onClick={setUserRating}
          disabled={rating === 0}
          style={{
            margin: '7px auto',
            display: feedBack && 'none',
          }}
        >
          Set Rating
        </Button>
      </div>

      <Feedback
        key={users.id}
        users={users}
        rating={rating}
        isSet={feedBack}
        stars={stars}
        resetClick={reset}
      />
    </div>
  );
};

export default Rating;
