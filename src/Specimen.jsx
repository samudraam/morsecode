import { useState, useEffect } from "react";
import "./Specimen.css";
import ToggleSwitch from "./ToggleSwitch";
import MorseToA from "./MorseToA";
import MorseToB from "./MorseToB";

function Specimen() {
  const [isMorseAll, setIsMorseAll] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ Track mount state

  useEffect(() => {
    setMounted(true); // ✅ Set true only after component mounts
  }, []);

  const letterComponents = [MorseToA, MorseToB];

  return (
    <div>
      {mounted && ( // ✅ Prevent animation before mount
        <>
          <ToggleSwitch
            isMorseAll={isMorseAll}
            toggleAll={() => setIsMorseAll(!isMorseAll)}
          />
          <div className="grid-container">
            {letterComponents.map((LetterComponent, idx) => (
              <div key={idx} className="grid-item">
                <LetterComponent isMorseAll={isMorseAll} color={"white"} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Specimen;
