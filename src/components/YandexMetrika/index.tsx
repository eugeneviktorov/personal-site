import { useEffect } from "react";
import { useLocation } from "react-router";

export const YandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.ym) {
      window.ym(105568816, "hit", location.pathname + location.search);
    }
  }, [location]);

  return null;
};
