const Modal = ({ rating, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className='modal-overly'>
      <div className='modal'>
        <h2>Thank you</h2>
        <p>
          You rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button onClick={onClose} className='close-btn'>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
