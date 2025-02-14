import PropTypes from "prop-types";

const Button = ({ text }) => {
    return (
        <button
            className={`bg-primary-color text-black px-7 py-3 rounded-full font-bold border-2 border-primary-color transition-all duration-300 ease-in-out hover:bg-transparent hover:text-primary-color `}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
