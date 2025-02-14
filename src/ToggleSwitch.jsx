import PropTypes from "prop-types";
import "./Toggle.css"
const ToggleSwitch = ({ isMorseAll, toggleAll }) => {
    return (
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={toggleAll}
            checked={isMorseAll ?? false}
          />
          <span className="slider round"></span>
        </label>
        <p>
          {isMorseAll === null
            ? "Switch to Morse"
            : isMorseAll
            ? "Switch to Letters"
            : "Switch to Morse"}
        </p>
      </div>
    );
  };
  ToggleSwitch.propTypes = {
    isMorseAll: PropTypes.bool.isRequired, 
    toggleAll: PropTypes.bool.isRequired
  };
  
  ToggleSwitch.defaultProps = {
    isMorseAll: false,
  };
  
  export default ToggleSwitch;
  