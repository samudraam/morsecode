import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { easeInOut } from "framer-motion";
import PropTypes from "prop-types";

const MorseToB = ({ isMorseAll, color }) => {
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
          cx={isMorse ? 1029 : 580}
          cy={isMorse ? 125 : 120}
          r={isMorse ? 125 : 125}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 580, cy: 120, borderRadius: "50%" },
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
          cx={isMorse ? 1351 : 355}
          cy={isMorse ? 125 : 416}
          r={isMorse ? 125 : 100}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 355, cy: 416, r: 100 },
          }}
          initial={{ cx: 1351, cy: 125, r: 125 }}
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.7 : 0.2,
          }}
        />

        {/* 3rd circle */}

        <motion.circle
          cx={isMorse ? 1673 : 580}
          cy={isMorse ? 125 : 708}
          r={isMorse ? 125 : 125}
          fill={color}
          variants={{
            morse: { scale: 1 },
            letter: { cx: 580, cy: 708, r: 125 },
          }}
          initial={{ cx: 1673, cy: 125, r: 125 }}
          animate={isMorse ? "morse" : "letter"}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: isMorse ? 0.9 : 0.4,
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
          ease: easeInOut,
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
        d="M10 4 H600"
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

      {/* First diagonal line */}
      <motion.path
        d="M536 229.361 L337 356.5"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* Middle horizontal line */}
      <motion.path
        d="M260 410 H0"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0, transformOrigin: "right center" }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* Second diagonal */}
      <motion.path
        d="M337 480 L536 612.5"
        stroke={color}
        strokeWidth="8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isMorse ? 0 : 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: isMorse ? 0 : 0.8,
        }}
      />

      {/* Bottom Horizontal */}
      <motion.path
        d="M0 828 H600"
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
    </svg>
  );
};

MorseToB.propTypes = {
  isMorseAll: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

MorseToB.defaultProps = {
  isMorseAll: false,
  color: "#ffffff",
};
export default MorseToB;
