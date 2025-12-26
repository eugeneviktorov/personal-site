import { FC } from "react";
import { TitleWidget } from "../TitleWidget";
import styles from "./ContactsWidget.module.css";
import { ContactItem } from "./components/ContactItem";
import { IconButton } from "@app/ui/IconButton";
import { FigmaIcon, GithubIcon, LinkedinIcon, MailIcon, UserIcon, WorkIcon } from "@app/ui/icons";

export const ContactsWidget: FC = () => {
  return (
    <div className={styles.container}>
      <TitleWidget title="Контакты" />
      <div className={styles.grid}>
        <div className={styles.primaryColumn}>
          <ContactItem icon={<IconButton noHover icon={<UserIcon />} />} title="Викторов Евгений" />
          <ContactItem icon={<IconButton noHover icon={<WorkIcon />} />} title="Самозанятый" />
        </div>
        <div className={styles.secondColumn}>
          <ContactItem
            icon={<IconButton noHover icon={<MailIcon />} />}
            title="eviktorovvv@gmail.com"
            link="mailto:eviktorovvv@gmail.com"
          />
          <ContactItem
            icon={<IconButton noHover icon={<LinkedinIcon />} />}
            title="@eugeneviktorov"
            link="https://www.linkedin.com/in/eugeneviktorov"
          />
        </div>
        <div className={styles.thirdColumn}>
          <ContactItem
            icon={<IconButton noHover icon={<GithubIcon />} />}
            title="@eugeneviktorov"
            link="https://github.com/eugeneviktorov"
          />
          <ContactItem
            icon={<IconButton noHover icon={<FigmaIcon />} />}
            title="@eugeneviktorov"
            link="https://www.figma.com/@eugeneviktorov"
          />
        </div>
      </div>
    </div>
  );
};
