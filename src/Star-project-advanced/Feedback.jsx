const Feedback = ({ rating, users }) => {
  return (
    <div className='systemFeedback'>
      <h1>System Feedback UI Logs</h1>
      <div className='logs'>
        <p className='name'>Name:</p>
        {/* <p>{users}</p> */}
        <p className='rating'>Rating:</p>
        {/* <p>{rating}</p> */}
      </div>
    </div>
  );
};

export default Feedback;
