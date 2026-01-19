const Button = ({ children, className, onClick, disabled, style }) => {
  return (
    <button
      className={className}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
