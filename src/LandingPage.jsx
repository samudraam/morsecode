import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MorseToT from "./MorseToT";
import MorseToE from "./MorseToE";
import MorseToL from "./MorseToL";
import MorseToG from "./MorseToG";
import MorseToR from "./MorseToR";
import MorseToA from "./MorseToA";
import MorseToP from "./MorseToP";
import MorseToH from "./MorseToH";
import "./LandingPage.css";

/**
 * LandingPage component displays an animated sequence of morse code letters
 * spelling "telegraph" that morph into letter forms, followed by a description
 * and navigation button.
 *
 * Animation sequence:
 * 1. Shows all letters in morse code state
 * 2. Sequentially reveals each letter form with a delay
 * 3. Shows description paragraph
 * 4. Shows navigation button
 */
const LandingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Start revealing letters one by one after 1000ms
    const intervals = [];
    for (let i = 1; i <= 9; i++) {
      intervals.push(
        setTimeout(() => {
          setVisibleLetters(i);
        }, 1000 + (i - 1) * 500)
      );
    }

    return () => intervals.forEach(clearTimeout);
  }, [mounted]);

  useEffect(() => {
    if (visibleLetters === 9) {
      // Show description after all letters are revealed (9 letters total)
      const timer = setTimeout(() => {
        setShowDescription(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [visibleLetters]);

  useEffect(() => {
    if (showDescription) {
      // Show button after description appears
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [showDescription]);

  useEffect(() => {
    if (showButton && targetRef.current) {
      // Scroll to the description and button when they appear
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [showButton]);

  const word = ["T", "E", "L", "E", "G", "R", "A", "P", "H"];
  const letterComponents = [
    MorseToT,
    MorseToE,
    MorseToL,
    MorseToE,
    MorseToG,
    MorseToR,
    MorseToA,
    MorseToP,
    MorseToH,
  ];

  if (!mounted) {
    return (
      <div className="landing-container">
        <div className="letters-container">
          {word.map((letter, index) => {
            const LetterComponent = letterComponents[index];
            return (
              <div key={index} className="letter-wrapper">
                <div className="letter-svg">
                  <LetterComponent isMorseAll={true} color="#ffffff" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="landing-container">
      <div className="letters-container">
        {word.map((letter, index) => {
          const LetterComponent = letterComponents[index];
          const isMorse = visibleLetters <= index;

          return (
            <div key={index} className="letter-wrapper">
              <div className="letter-svg">
                <LetterComponent isMorseAll={isMorse} color="#ffffff" />
              </div>
            </div>
          );
        })}
      </div>

      <div ref={targetRef} className="description-container">
        {showDescription && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="description"
          >
            A morsecode based motion typography created by samudraam
          </motion.p>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/specimen" className="specimen-button">
              take me to specimen
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
