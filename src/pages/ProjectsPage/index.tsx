import { PageWrapper } from "@app/components/PageWrapper";
import { ProjectWidget } from "@app/components/ProjectWidget";
import type { FC } from "react";

export const ProjectsPage: FC = () => {
  return (
    <PageWrapper title="Проекты" headerMain>
      <ProjectWidget />
    </PageWrapper>
  );
};
