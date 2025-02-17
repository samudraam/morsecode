import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToJ = ({ isMorseAll, color }) => {
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
          x={150}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 150, y: 40, width: 832, height: 122 },
            letter: { x: 125, y: 0, width: 567, height: 122 },
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
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 600, y: 40, width: 832, height: 122 },
            letter: { x: -450, y: 265, width: 741, height: 122, rotate: -90 },
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
          x={1050}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 1050, y: 40, width: 832, height: 122 },
            letter: { x: -960, y: 625, width: 535, height: 122 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        {/* Morse Code Dot */}
        <motion.circle
          cx={125}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 125, cy: 125, r: 125 },
            letter: { cx: 125, cy: 450, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        {/* Letter J Curve Line */}
        <motion.path
          d="M100 415 V750"
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
      </motion.g>
    </svg>
  );
};

MorseToJ.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToJ.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToJ;
