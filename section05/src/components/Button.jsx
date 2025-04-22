const Button = ({ children, text, color = "black" }) => {
  //이벤트 객체체
  const OnClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={OnClickButton}
      // onMouseEnter={OnClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
