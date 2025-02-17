import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToM = ({ isMorseAll, color }) => {
  const [isMorse, setIsMorse] = useState(false);

  useEffect(() => {
    if (isMorseAll !== null) {
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
        {/* Left Horizontal Dash*/}
        <motion.rect
          x={0}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 0, y: 0, rotate: 0 },
            letter: {
              x: -300,
              y: 365,
              rotate: -90,
              transformOrigin: "bottom left",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />
        {/* Right Horizontal Dash */}
        <motion.rect
          x={450}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 450, y: 0, rotate: 0 },
            letter: {
              x: -80,
              y: 365,
              rotate: -90,
              transformOrigin: "bottom right",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />
        {/* Left Diagonal Stroke */}
        <motion.path
          d="M60 15L450 800"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: isMorse ? 0 : 1,
            transition: {
              duration: 1,
              ease: "circOut",
              delay: isMorse ? 0 : 0.9,
            },
          }}
        />
        {/* Right Diagonal Stroke */}
        <motion.path
          d="M450 818L780 110"
          stroke={color}
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: isMorse ? 0 : 1,
            transformOrigin: "top center",
            transition: {
              duration: 1,
              ease: "circOut",
              delay: isMorse ? 0 : 0.9,
            },
          }}
        />
      </motion.g>
    </svg>
  );
};

MorseToM.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToM.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToM;
