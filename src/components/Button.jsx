import PropTypes from 'prop-types';

const Button = ({
  label,
  handleClickEvent,
  size = 'md',
  color = '#000',
  backgroundColor = 'transparent',
}) => {
  let scale = 1;
  if (size === 'sm') scale = 0.7;
  if (size === 'lg') scale = 1.3;

  const style = {
    backgroundColor,
    color,
    borderRadius: '6px',
    border: '2px solid #000',
    margin: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    transform: `scale(${scale})`,
  };

  return (
    <>
      <button style={style} onClick={handleClickEvent}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClickEvent: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
