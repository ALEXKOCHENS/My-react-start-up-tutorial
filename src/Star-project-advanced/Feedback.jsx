const Feedback = ({ rating, users, isSet }) => {
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
        <div className='logs'>
          {user.name}
          <p className='user-name'>{rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
