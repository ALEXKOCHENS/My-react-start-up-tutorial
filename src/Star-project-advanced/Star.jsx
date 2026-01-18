const Star = ({
  rating,
  hover,
  star,
  ratingClick,
  hoverClick,
  resetHoverClick,
  color = 'gold',
}) => {
  return (
    <span
      className='star'
      onClick={ratingClick}
      onMouseEnter={hoverClick}
      onMouseLeave={resetHoverClick}
      style={{
        color: star <= (rating || hover) ? color : '#ccc',
      }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
