import { useState, useEffect } from "react";
import "./Specimen.css";
import ToggleSwitch from "./ToggleSwitch";
import MorseToA from "./MorseToA";
import MorseToB from "./MorseToB";
import MorseToC from "./MorseToC";
import MorseToD from "./MorseToD";
import MorseToE from "./MorseToE";
import MorseToF from "./MorseToF";
import MorseToG from "./MorseToG";
import MorseToH from "./MorseToH";
import MorseToI from "./MorseToI";
import MorseToJ from "./MorseToJ";
import MorseToK from "./MorseToK";
import MorseToL from "./MorseToL";
import MorseToM from "./MorseToM";
import MorseToN from "./MorseToN";
import MorseToO from "./MorseToO";
import MorseToP from "./MorseToP";
import MorseToQ from "./MorseToQ";
import MorseToR from "./MorseToR";
import MorseToS from "./MorseToS";
import MorseToT from "./MorseToT";
import MorseToU from "./MorseToU";
import MorseToV from "./MorseToV";
import MorseToW from "./MorseToW";
import MorseToX from "./MorseToX";
import MorseToY from "./MorseToY";
import MorseToZ from "./MorseToZ";

function Specimen() {
  const [isMorseAll, setIsMorseAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const globalColor = "white";

  console.log(isMorseAll);
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1>telegraph</h1>
          <ToggleSwitch
            isMorseAll={isMorseAll}
            toggleAll={() => setIsMorseAll(!isMorseAll)}
          />
        </div>
        <div className="grid-container">
          {mounted && <MorseToA isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToB isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToC isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToD isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToE isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToF isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToG isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToH isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToI isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToJ isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToK isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToL isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToM isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToN isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToO isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToP isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToQ isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToR isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToS isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToT isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToU isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToV isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToW isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToX isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToY isMorseAll={isMorseAll} color={globalColor} />}
          {mounted && <MorseToZ isMorseAll={isMorseAll} color={globalColor} />}
        </div>
      </div>
    </>
  );
}

export default Specimen;
