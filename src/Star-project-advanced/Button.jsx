const Button = ({ children, className, onClick, disabled, style }) => {
  console.log(children);
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
