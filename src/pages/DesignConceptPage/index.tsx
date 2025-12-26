import { DesignConceptWidget } from "@app/components/DesignConceptWidget";
import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";

export const DesignConceptPage: FC = () => {
  return (
    <PageWrapper headerBack>
      <DesignConceptWidget />
    </PageWrapper>
  );
};
