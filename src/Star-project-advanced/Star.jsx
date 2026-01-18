const Star = ({ rating, star, ratingClick, color = 'gold' }) => {
  return (
    <span
      className='star'
      onClick={ratingClick}
      style={{
        color: star <= rating ? color : '#ccc',
      }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
