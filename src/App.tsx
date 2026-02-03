import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Head } from "./components/Head";
import { Loader } from "./components/Loader";
import { SplashScreen } from "./components/SplashScreen";
import { YandexMetrika } from "./components/YandexMetrika";
import { pwaCheck } from "./hooks/pwaCheck";
import { useOnlineStatus } from "./hooks/useOnline";
import { DesignConceptPage } from "./pages/DesignConceptPage";
import { MainPage } from "./pages/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OfflinePage } from "./pages/OfflinePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TermsOfUse } from "./pages/TermsOfUse";

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
