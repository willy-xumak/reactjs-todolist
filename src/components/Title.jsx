import PropTypes from 'prop-types';

const Title = ({ title, color }) => {
  const style = {
    color: color,
  };

  return (
    <>
      <h1 style={style}>{title}</h1>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Title;
