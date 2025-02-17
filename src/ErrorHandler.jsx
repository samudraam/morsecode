import { useEffect } from "react";

function ErrorHandler() {
  useEffect(() => {
    const errorHandler = (event) => {
      if (
        event.message.includes("Cannot read properties of null (reading '0')")
      ) {
        console.error(
          "🚨 Reloading due to Framer Motion error:",
          event.message
        );
        if (!sessionStorage.getItem("reloaded")) {
          sessionStorage.setItem("reloaded", "true");
          window.location.reload();
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
