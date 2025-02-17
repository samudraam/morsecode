import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToL = ({ isMorseAll, color }) => {
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
        {/* Morse Code Rect (Dash) */}
        <motion.rect
          x={160}
          y={40}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 160, y: 40, width: 832, height: 122 },
            letter: { x: 200, y: 700, width: 500, height: 122 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

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
            delay: isMorse ? 0 : 0,
          }}
        />

        <motion.circle
          cx={1351}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1351, cy: 125, r: 125 },
            letter: { cx: 125, cy: 447, r: 125 },
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
          cx={1673}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1673, cy: 125, r: 125 },
            letter: { cx: 125, cy: 769, r: 125 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />

        {/* Letter L Vertical Stroke */}
        <motion.path
          d="M127.5 188.5V820"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray="640"
          strokeDashoffset={isMorse ? 640 : 0}
          initial={{ strokeDashoffset: 640 }}
          animate={{ strokeDashoffset: isMorse ? 640 : 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0.8,
          }}
        />

        {/* Letter L Horizontal Stroke */}
        <motion.path
          d="M127.5 820H632.5"
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

MorseToL.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToL.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToL;
