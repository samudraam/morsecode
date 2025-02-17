import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToH = ({ isMorseAll, color }) => {
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
            letter: { cx: 797, cy: 125, r: 125 },
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

        <motion.circle
          cx={1091}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1091, cy: 125, r: 125 },
            letter: { cx: 797, cy: 707, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        {/* Letter H Vertical Lines */}
        <motion.path
          d="M122 222V406.236"
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

        <motion.path
          d="M122 607V406.236"
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

        <motion.path
          d="M810 222V406.236"
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

        <motion.path
          d="M810 607V406.236"
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

        {/* Letter H Middle Horizontal Line */}
        <motion.path
          d="M122 406.236H810"
          stroke={color}
          strokeWidth="8"
          fill="none"
          initial={{ scaleX: 0, transformOrigin: "0% 50%" }}
          animate={{ scaleX: isMorse ? 0 : 1 }}
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
MorseToH.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToH.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToH;
