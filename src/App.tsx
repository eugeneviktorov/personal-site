import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { MainPage } from "./pages/MainPage";
import { Head } from "./components/Head";
import { useOnlineStatus } from "./hooks/useOnline";
import { OfflinePage } from "./pages/OfflinePage";
import { SplashScreen } from "./components/SplashScreen";
import { ProjectsPage } from "./pages/ProjectsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { Loader } from "./components/Loader";
import { pwaCheck } from "./hooks/pwaCheck";
import { YandexMetrika } from "./components/YandexMetrika";
import { DesignConceptPage } from "./pages/DesignConceptPage";

export const App: FC = () => {
  const isPWA = pwaCheck();
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
      <Head />
      <SplashScreen />
      {!isPWA && <Loader />}
      <BrowserRouter>
        <YandexMetrika />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/design-concept" element={<DesignConceptPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
