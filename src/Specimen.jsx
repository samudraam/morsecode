import "./Specimen.css";
import PropTypes from "prop-types";
import MorseToA from "./MorseToA";
import MorseToB from "./MorseToB";
import MorseToC from "./MorseToC";
import MorseToD from "./MorseToD";
import MorseToE from "./MorseToE";

const letterComponents = [MorseToA, MorseToB, MorseToC, MorseToD, MorseToE];

const Specimen = ({ isMorseAll }) => {
  return (
    <div className="grid-container">
      {letterComponents.map((LetterComponent, idx) => {
        return (
          <div key={idx} className="grid-item">
            <LetterComponent isMorseAll={isMorseAll} color={"white"} />
          </div>
        );
      })}
    </div>
  );
};

Specimen.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
};

export default Specimen;
