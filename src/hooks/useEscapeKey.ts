import { useEffect } from "react";

export function useEscapeKey(onClose: () => void): void {
  useEffect(() => {
    if (typeof onClose !== "function") return;

    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
}
