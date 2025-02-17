import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToY = ({ isMorseAll, color }) => {
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
        {/* Morse Code Dashes */}
        <motion.rect
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { y: 40, width: 832, height: 122 },
            letter: { x: -130, y: 250, width: 400, height: 122, rotate: 50 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        <motion.rect
          x={620}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 620, y: 40, width: 832, height: 122 },
            letter: { x: -300, y: -90, width: 400, height: 122, rotate: -50 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        {/* Morse Code Dot */}
        <motion.circle
          cx={1029}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1029, cy: 125, r: 125 },
            letter: { cx: 370, cy: 420, r: 90 },
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
          x={1070}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 1070, y: 40, width: 832, height: 122 },
            letter: { x: -1120, y: 860, width: 300, height: 122, rotate: 90 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0.8 : 0,
          }}
        />

        <motion.path
          d="M370 800 L370 400"
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
          d="M400 500 L200 200"
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
          d="M700 40 L380 400"
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

MorseToY.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToY.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToY;
