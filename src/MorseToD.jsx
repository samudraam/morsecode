import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MorseToD = ({ isMorseAll, color }) => {
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
        {/* 1st circle */}
        <motion.circle
          cx={isMorse ? 1029 : 710}
          cy={isMorse ? 125 : 120}
          r={isMorse ? 125 : 125}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 710, cy: 120, borderRadius: "50%" },
          }}
          initial={{ cx: 1029, cy: 125, r: 125 }}
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.5 : 0,
          }}
        />

        {/* 2nd circle */}
        <motion.circle
          cx={isMorse ? 1351 : 710}
          cy={isMorse ? 125 : 720}
          r={isMorse ? 125 : 100}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 710, cy: 720, r: 125 },
          }}
          initial={{ cx: 1351, cy: 125, r: 125 }}
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.7 : 0.2,
          }}
        />
      </motion.g>

      {/*Dash */}
      <motion.rect
        x={10}
        y={40}
        width={832}
        height={122}
        initial={{ x: 10, y: 40, rotate: 0 }}
        fill={color}
        animate={{
          x: isMorse ? 10 : -365,
          y: isMorse ? 40 : 315,
          rotate: isMorse ? 0 : 90,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0.8 : 0,
        }}
      />

      {/* First horizontal line */}
      <motion.path
        d="M10 4 H600"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* First horizontal line  */}
      <motion.path
        d="M10 4 H700"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, transformOrigin: "left center" }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* Bottom Horizontal */}
      <motion.path
        d="M0 828 H670"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, transformOrigin: "0% 50%" }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* Bottom line down */}
      <motion.path
        d="M710 110 V740"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isMorse ? 0 : 1,
          transformOrigin: "top center",
          transition: {
            duration: 1,
            ease: "circOut",
            delay: isMorse ? 0 : 0.8,
          },
        }}
      />
    </svg>
  );
};

MorseToD.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToD.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};

export default MorseToD;
