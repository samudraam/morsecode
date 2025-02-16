import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToC = ({ isMorseAll, color }) => {
  const [isMorse, setIsMorse] = useState(false);
  useEffect(() => {
    if (isMorseAll !== null) {
      setIsMorse(isMorseAll ?? false);
    }
  }, [isMorseAll]);

  return (
    <svg
      viewBox="0 0 3300 900"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{
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
        {/* 1st circle */}
        <motion.circle
          cx={isMorse ? 1029 : 125}
          cy={isMorse ? 125 : 275}
          r={isMorse ? 125 : 125}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 125, cy: 275, borderRadius: "50%" },
          }}
          initial={{ cx: 1029, cy: 125, r: 125 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        <motion.rect
          x={1200}
          y={40}
          width={832}
          height={122}
          initial={{ x: 10, y: 40, rotate: 0 }}
          fill={color}
          variants={{
            morse: { x: 10, y: 40 },
            letter: { x: -1200, y: 700 },
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        {/* 2nd circle */}
        <motion.circle
          cx={isMorse ? 2200 : 125}
          cy={isMorse ? 125 : 556}
          r={isMorse ? 125 : 125}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 125, cy: 556, r: 125 },
          }}
          initial={{ cx: 2210, cy: 125, r: 125 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />
      </motion.g>

      {/*Top */}
      <motion.rect
        x={10}
        y={40}
        width={832}
        height={122}
        initial={{ x: 10, y: 40, rotate: 0 }}
        fill={color}
        animate={{
          x: isMorse ? 10 : 0,
          y: isMorse ? 40 : -50,
        }}
        variants={{
          morse: { x: 10, y: 40 },
          letter: { x: 0, y: 50 },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0.8 : 0,
        }}
      />

      {/* First horizontal line  */}
      <motion.path
        d="M125 110 V740"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transformOrigin: "top center",
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.6,
          },
        }}
      />
    </svg>
  );
};

MorseToC.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToC.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToC;
