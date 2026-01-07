const Star = () => {
  const stars = [1, 2, 3, 4, 5];
  const clicked = (index) => {
    console.log(`A star  has been clicked at index`, index);
  };
  return (
    <div className='paragraph'>
      <p className='h1style'>Rate your Experience</p>

      <ul>
        {stars.map((star, index) => (
          <span onClick={() => clicked(index)} key={star} className='star-span'>
            {'\u2605'}
          </span>
        ))}
      </ul>
    </div>
  );
};

export default Star;
