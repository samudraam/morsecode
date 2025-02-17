import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToV = ({ isMorseAll, color }) => {
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
            letter: { cx: 447, cy: 700, r: 125 },
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
            letter: { cx: 769, cy: 125, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        <motion.rect
          initial={{ x: 950, y: 70, height: 122, width: 832 }}
          height={122}
          fill={color}
          animate={{
            y: isMorse ? 70 : 500,
            x: isMorse ? 950 : -40,
            width: isMorse ? 832 : 600,
            height: isMorse ? 122 : 122,
            rotate: isMorse ? 0 : 60,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        <motion.path
          d="M830 75 L400 800"
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
MorseToV.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToV.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToV;
