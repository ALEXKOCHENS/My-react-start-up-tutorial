const StarComponent = ({
  star,
  rating,
  hover,
  ratingClick,
  hoverClick,
  hoverLeave,
  color = 'gold',
}) => {
  return (
    <span
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverClick(star)}
      onMouseLeave={hoverLeave}
      className='star'
      style={{
        color: star <= (hover || rating) ? color : 'gray',
        fontSize: '32px',
        cursor: 'pointer',
        margin: '5px',
      }}
    >
      {'\u2605'}
    </span>
  );
};

export default StarComponent;
