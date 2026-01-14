import { AboutWidget } from "@app/pages/MainPage/components/AboutWidget";
import { ClientsWidget } from "@app/pages/MainPage/components/ClientsWidget";
import { ContactsWidget } from "@app/pages/MainPage/components/ContactsWidget";
import { DesignConceptWidget } from "@app/pages/DesignConceptPage/components/DesignConceptWidget";
import { DirectionsWidget } from "@app/pages/MainPage/components/DirectionsWidget";
import { FeedbackWidget } from "@app/pages/MainPage/components/FeedbackWidget";
import { PageWrapper } from "@app/components/PageWrapper";
import { ProjectWidget } from "@app/components/ProjectWidget";
import type { FC } from "react";

export const MainPage: FC = () => {
  return (
    <PageWrapper headerMain>
      <AboutWidget />
      <DirectionsWidget />
      <DesignConceptWidget isSmall />
      <ProjectWidget favorite />
      <ClientsWidget />
      <ContactsWidget />
      <FeedbackWidget />
    </PageWrapper>
  );
};
