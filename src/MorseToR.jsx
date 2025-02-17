import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToR = ({ isMorseAll, color }) => {
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
              cx: 800,
              cy: 80,
              r: 90,
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
        <motion.rect
          initial={{ x: 300, y: 70, height: 122 }}
          width={832}
          height={122}
          fill={color}
          animate={{
            y: isMorse ? 70 : 350,
            x: isMorse ? 300 : -350,
            height: isMorse ? 122 : 122,
            rotate: isMorse ? 0 : 90,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        <motion.circle
          cx={1290}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1290, cy: 125, r: 125 },
            letter: {
              cx: 800,
              cy: 450,
              r: 90,
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
        {/* Horizontal Line */}
        <motion.path
          d="M100 450 H725"
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
        {/* Horizontal Line */}
        <motion.path
          d="M100 0 H765"
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
        <motion.path
          d="M800 100 L800 400"
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
          d="M100 435 L800 800"
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

MorseToR.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToR.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToR;
