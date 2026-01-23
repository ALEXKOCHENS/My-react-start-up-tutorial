import { FaStar } from 'react-icons/fa';

const Star = ({
  rating,
  hover,
  star,
  ratingClick,
  hoverClick,
  resetHoverClick,
  color = 'gold',
}) => {
  const activeValue = rating || hover;

  return (
    <span
      className='star'
      onClick={ratingClick}
      onMouseEnter={hoverClick}
      onMouseLeave={resetHoverClick}
      style={{
        color: star <= activeValue ? color : '#ccc',
        cursor: 'pointer',
      }}
    >
      <FaStar size={24} />
    </span>
  );
};

export default Star;
