import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToT = ({ isMorseAll, color }) => {
  const [isMorse, setIsMorse] = useState(false);

  useEffect(() => {
    if (typeof isMorseAll === "boolean") {
      setIsMorse(isMorseAll);
    }
  }, [isMorseAll]);

  return (
    <svg
      viewBox="0 0 3300 900"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{
        maxWidth: "300px",
        height: "auto",
        cursor: "pointer",
        overflow: "visible",
      }}
      onClick={() => setIsMorse(!isMorse)}
    >
      <motion.g
        animate={isMorse ? "morse" : "letter"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Morse Code (Three Dashes) */}
        <motion.rect
          initial={{ x: -5, y: 70, height: 122 }}
          width={832}
          height={122}
          fill={color}
          animate={{
            y: isMorse ? 70 : 370,
            x: isMorse ? -5 : 10,
            height: isMorse ? 122 : 122,
            rotate: isMorse ? 0 : 90,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />
        <motion.path
          d="M50 10 H800"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: isMorse ? 0 : 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.6 : 1.0,
          }}
        />
      </motion.g>
    </svg>
  );
};

MorseToT.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToT.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToT;
