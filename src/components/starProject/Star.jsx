import { useState } from 'react';
import StarComponent from './StarComponent';
const Star = ({ heading, feedbackMessages }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const stars = [1, 2, 3, 4, 5];
  const handleSubmission = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };
  const closeModal = () => {
    setSubmitted(false);
    setHover(0);
    setRating(0);
  };
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
        ))}
      </ul>

      {rating > 0 && (
        <p className='feedbackMessages'>{feedbackMessages[rating - 1]}</p>
      )}
      <button
        onClick={handleSubmission}
        className='submit-btn'
        disabled={rating === 0}
      >
        Submit
      </button>
      {/* Modal */}

      {submitted && (
        <div className='modal-overly'>
          <div className='modal'>
            <h2>Thank you</h2>
            <p>
              You rated us {rating} star{rating > 1 ? 's' : ''}
            </p>
            <button onClick={closeModal} className='close-btn'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Star;
