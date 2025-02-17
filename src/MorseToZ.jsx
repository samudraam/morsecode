import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToZ = ({ isMorseAll, color }) => {
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
          y={50}
          width={832}
          height={122}
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
          x={450}
          y={20}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 450, y: 20 },
            letter: {
              x: -460,
              y: 650,
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
        {/* Morse Code Dots */}
        <motion.circle
          cx={1900}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1900, cy: 125, r: 125 },
            letter: { cx: 300, cy: 500, r: 125 },
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
          cx={2200}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 2200, cy: 125, r: 125 },
            letter: { cx: 500, cy: 320, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />
        <motion.path
          d="M810 50 L30 800"
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

MorseToZ.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToZ.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToZ;
