import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { MainPage } from "./pages/MainPage";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
