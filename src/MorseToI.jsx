import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToI = ({ isMorseAll, color }) => {
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
            letter: { cx: 390, cy: 125, r: 125 },
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
            letter: { cx: 390, cy: 707, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        {/* Letter I Vertical Line */}
        <motion.path
          d="M390 37L390 711"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleY: 0, transformOrigin: "50% 0%" }}
          animate={{ scaleY: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        {/* Letter I Top and Bottom Horizontal Lines */}
        <motion.path
          d="M779 125H392H0"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "50% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        <motion.path
          d="M779 711H392H0"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "50% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8, // Slight delay for staggered effect
          }}
        />
      </motion.g>
    </svg>
  );
};

MorseToI.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToI.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToI;
