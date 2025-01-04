import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => {
    return (
        <div className="text-center py-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-color">{title}</h3>
            {subtitle && <p className="text-slate-500 text-sm ">{subtitle}</p>}
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,

}
export default Title;