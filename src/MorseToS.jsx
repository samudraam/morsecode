import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToS = ({ isMorseAll, color }) => {
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
        {/* Morse Code Dots */}
        <motion.circle
          cx={125}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 125, cy: 125, r: 125 },
            letter: { cx: 125, cy: 125, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        <motion.circle
          cx={447}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 447, cy: 125, r: 125 },
            letter: { cx: 800, cy: 425, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        <motion.circle
          cx={769}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 769, cy: 125, r: 125 },
            letter: { cx: 125, cy: 707, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />
        {/* Horizontal Line */}
        <motion.path
          d="M100 80 H800"
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
          d="M100 425 H800"
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
          d="M800 75 L800 200"
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
          d="M90 75 L90 430"
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
          d="M800 550 L800 800"
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
        {/* Horizontal Line */}
        <motion.path
          d="M100 800 H800"
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
MorseToS.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToS.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToS;
