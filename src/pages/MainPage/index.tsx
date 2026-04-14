import { PageWrapper } from "@app/components/PageWrapper";
import { FC, useState } from "react";

import { Profile } from "./components/Profile";

export const MainPage: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <PageWrapper>
      <>{isOpen && <Profile onClose={() => setIsOpen(false)} />}</>
    </PageWrapper>
  );
};
