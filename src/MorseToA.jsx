import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToA = ({ isMorseAll, color }) => {
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
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.circle
          cx={125}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 125, cy: 125, r: 125 },
            letter: {
              cx: 419,
              cy: 118.8,
              r: 125,
            },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />
      </motion.g>

      <motion.rect
        initial={{ x: 300, y: 70, height: 122 }}
        width={832}
        height={122}
        fill={color}
        animate={{
          y: isMorse ? 70 : 445,
          x: isMorse ? 300 : 5,
          height: isMorse ? 122 : 116,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0.8 : 0,
        }}
      />

      <motion.path
        d="M313.5 146L4 450V833"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.8,
          },
        }}
      />

      <motion.path
        d="M526.5 146L834 450.5V833"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.8,
          },
        }}
      />

      <motion.path
        d="M4 450 L4 833"
        stroke={color}
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transformOrigin: "top center",
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.8,
          },
        }}
      />

      <motion.path
        d="M834 450 L834 833"
        stroke={color}
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transformOrigin: "top center",
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.8,
          },
        }}
      />
    </svg>
  );
};

MorseToA.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToA.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToA;
