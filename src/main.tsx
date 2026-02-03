import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./App";
import "./globals.css";
import { setupStore } from "./redux/store";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
);
