import { useState } from 'react';
import StarComponent from './StarComponent';
const Star = ({ heading, feedbackMessages }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='container'>
      <p className='h1style'>{heading}</p>
      <ul>
        {stars.map((star) => (
          <StarComponent
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            ratingClick={setRating}
            hoverClick={setHover}
            hoverLeave={() => setHover(null)}
          />

          // <span
          //   key={star}
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          //   style={{
          //     color: star <= (hover || rating) ? 'gold' : 'gray',
          //     fontSize: '32px',
          //     cursor: 'pointer',
          //     margin: '5px',
          //   }}
          //   className='star'
          // >
          //   {'\u2605'}
          // </span>
        ))}
      </ul>

      {rating > 0 && (
        <p className='feedbackMessages'>{feedbackMessages[rating - 1]}</p>
      )}
    </div>
  );
};

export default Star;
