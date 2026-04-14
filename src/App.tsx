import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Head } from "./components/Head";
import { YandexMetrika } from "./components/YandexMetrika";
import { MainPage } from "./pages/MainPage";

export const App: FC = () => {
  return (
    <>
      <Head />
      <BrowserRouter>
        <YandexMetrika />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
