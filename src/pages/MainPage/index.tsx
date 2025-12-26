import { AboutWidget } from "@app/components/AboutWidget";
import { ClientsWidget } from "@app/components/ClientsWidget";
import { ContactsWidget } from "@app/components/ContactsWidget";
import { DesignConceptWidget } from "@app/components/DesignConceptWidget";
import { DirectionsWidget } from "@app/components/DirectionsWidget";
import { FeedbackWidget } from "@app/components/FeedbackWidget";
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
