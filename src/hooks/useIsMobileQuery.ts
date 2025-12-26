import { useMediaQuery } from "react-responsive";

export function useIsMobileQuery() {
  return useMediaQuery({ maxWidth: 1200 });
}
