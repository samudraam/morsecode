import { useEffect } from "react";

function ErrorHandler() {
  useEffect(() => {
    const errorHandler = (event) => {
      if (
        event.message.includes("Cannot read properties of null (reading '0')")
      ) {
        console.error("Reloading due to Framer Motion error:", event.message);

        // Get current reload count from sessionStorage (default to 0)
        const reloadCount =
          parseInt(sessionStorage.getItem("reloadCount"), 10) || 0;

        if (reloadCount < 10) {
          // If we haven't exceeded the max reload attempts
          sessionStorage.setItem("reloadCount", reloadCount + 1);
          window.location.reload();
        } else {
          // We've reached the max reload attempts
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
