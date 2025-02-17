import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToQ = ({ isMorseAll, color }) => {
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
          y={40}
          width={832}
          height={125}
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
          y={20}
          x={450}
          width={832}
          height={125}
          fill={color}
          variants={{
            morse: {
              x: 450,
              y: 20,
              width: 832,
              height: 125,
              rotate: 0,
              transformOrigin: "top left",
            },
            letter: {
              x: 100,
              y: 830,
              width: 380,
              rotate: 45,
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

        {/* Morse Code Circle */}
        <motion.circle
          cx={1920}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1920, cy: 125, r: 125 },
            letter: {
              cx: 500,
              cy: 450,
              r: 110,
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
          y={20}
          x={2100}
          width={832}
          height={125}
          fill={color}
          variants={{
            morse: { cx: 2100, cy: 832, r: 125 },
            letter: {
              x: -2100,
              y: 670,
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

        <motion.path
          d="M10 100L10 800"
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
          d="M825 100L825 800"
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

        {/* Left Diagonal Stroke */}
        <motion.path
          d="M550 500 L850 800"
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
      </motion.g>
    </svg>
  );
};

MorseToQ.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToQ.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToQ;
