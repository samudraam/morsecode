import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToO = ({ isMorseAll, color }) => {
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
          width={832}
          height={122}
          fill={color}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.3,
          }}
        />

        <motion.rect
          x={904}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { opacity: 1, x: 0 },
            letter: {
              x: -1270,
              y: 360,
              rotate: 90,
              transformOrigin: "top left",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.2 : 0.5,
          }}
        />

        <motion.rect
          x={1808}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { opacity: 1, x: 0 },
            letter: {
              x: -1450,
              y: 360,
              rotate: 90,
              transformOrigin: "top left",
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.4 : 0.7,
          }}
        />

        {/* Horizontal Line Inside Letter O */}
        <motion.path
          d="M109 828H713"
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

MorseToO.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToO.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToO;
