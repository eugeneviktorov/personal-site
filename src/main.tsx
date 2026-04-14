import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
