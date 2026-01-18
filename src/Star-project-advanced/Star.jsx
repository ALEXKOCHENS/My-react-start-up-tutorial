const Star = ({
  rating,
  hover,
  star,
  ratingClick,
  hoverClick,
  color = 'gold',
}) => {
  return (
    <span
      className='star'
      onClick={ratingClick}
      onMouseEnter={hoverClick}
      style={{
        color: star <= (rating || hover) ? color : '#ccc',
      }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
