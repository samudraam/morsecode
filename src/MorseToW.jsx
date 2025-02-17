import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToW = ({ isMorseAll, color }) => {
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
        {/* Morse Code Circle */}
        <motion.circle
          cx={125}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 125, cy: 125, r: 125 },
            letter: {
              cx: 400,
              cy: 250,
              r: 90,
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        <motion.rect
          x={160}
          y={35}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 160, y: 35, width: 832, height: 122 },
            letter: { x: -490, y: 320, width: 832, height: 122, rotate: 80 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />
        <motion.rect
          x={600}
          y={35}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 600, y: 35, width: 832, height: 122 },
            letter: { x: -300, y: 320, width: 832, height: 122, rotate: -80 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        <motion.path
          d="M400 250 L600 800"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ pathLength: 0, transformOrigin: "50% 0%" }}
          animate={{ pathLength: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        <motion.path
          d="M400 250 L200 800"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ pathLength: 0, transformOrigin: "50% 0%" }}
          animate={{ pathLength: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />
      </motion.g>
    </svg>
  );
};

MorseToW.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToW.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToW;
