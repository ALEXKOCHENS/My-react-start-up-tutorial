const Feedback = ({ rating, users, isSet, resetClick }) => {
  if (!isSet) {
    return null;
  }
  return (
    <div className='systemFeedback'>
      <h1>System Feedback UI Logs</h1>
      <div className='titles'>
        <p>Name</p>
        <p>Rating</p>
      </div>
      {users.map((user) => (
        <div key={user.id} className='logs'>
          {user.name}
          <p className='user-name'>{rating}</p>
        </div>
      ))}

      <button
        onClick={resetClick}
        className='reset-button'
        style={{
          margin: '10px auto',
        }}
      >
        Reset Rating
      </button>
    </div>
  );
};

export default Feedback;
