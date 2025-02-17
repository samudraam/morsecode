import { useEffect } from "react";

function ErrorHandler() {
  useEffect(() => {
    const errorHandler = (event) => {
      if (
        event.message.includes("Cannot read properties of null (reading '0')")
      ) {
        console.error("Reloading due to Framer Motion error:", event.message);

        const reloadCount =
          parseInt(sessionStorage.getItem("reloadCount"), 10) || 0;

        if (reloadCount < 20) {
          sessionStorage.setItem("reloadCount", reloadCount + 1);
          window.location.reload();
        } else {
          console.error("Max reload attempts reached. Not reloading again.");
        }
      }
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  return null;
}

export default ErrorHandler;
