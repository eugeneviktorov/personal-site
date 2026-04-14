import { InfoItem } from "@app/components/InfoItem";
import { MainWindow } from "@app/components/MainWindow";
import { WindowContent } from "@app/components/WindowContent";
import { ButtonLink } from "@app/ui/ButtonLink";
import { FC } from "react";

import style from "./Profile.module.css";
import { IProfile } from "./Profile.types";

export const Profile: FC<IProfile> = ({ onClose }) => {
  return (
    <MainWindow onClose={onClose} icon="chm-2.png" title="profile.exe">
      <WindowContent title="General information">
        <InfoItem name="Name" value="Eugene Viktorov" />
        <InfoItem name="Activity" value="Universal IT Specialist" />
      </WindowContent>
      <WindowContent title="Links">
        <div className={style.links}>
          <ButtonLink link="https://github.com/eugeneviktorov" title="GitHub" />
          <ButtonLink link="https://www.figma.com/@eugeneviktorov" title="Figma" />
          <ButtonLink link="https://www.linkedin.com/in/eugeneviktorov/" title="LinkedIn" />
          <ButtonLink link="mailto:eviktorovvv@gmail.com" title="Email" />
        </div>
      </WindowContent>
    </MainWindow>
  );
};
