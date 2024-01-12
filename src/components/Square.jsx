/* eslint-disable react/prop-types */

const Square = ({ value, onSquareClick, disabled }) => {
  let style = "bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg";
  if (value || disabled) {
    style += " cursor-default";
  } else {
    style += " cursor-pointer";
  }

  return (
    <button
      className={style}
      onClick={onSquareClick}
      disabled={value || disabled}
    >
      {value}
    </button>
  );
};

export default Square;
