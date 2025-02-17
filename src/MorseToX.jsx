import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MorseToX = ({ isMorseAll, color }) => {
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
              cx: 110,
              cy: 680,
              r: 125,
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
          x={150}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 150, y: 70, width: 832, height: 122 },
            letter: { x: -150, y: 300, width: 832, height: 122, rotate: 45 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />
        <motion.circle
          cx={1300}
          cy={125}
          r={125}
          fill={color}
          variants={{
            morse: { cx: 1300, cy: 125, r: 125 },
            letter: {
              cx: 750,
              cy: 680,
              r: 125,
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
          x={740}
          y={0}
          width={832}
          height={122}
          fill={color}
          variants={{
            morse: { x: 740, y: 70, width: 832, height: 122 },
            letter: { x: -720, y: 300, width: 832, height: 122, rotate: -45 },
          }}
          initial="morse"
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: isMorse ? 0 : 0,
          }}
        />
      </motion.g>
    </svg>
  );
};

MorseToX.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToX.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToX;
