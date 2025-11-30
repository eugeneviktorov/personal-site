import { ViewLink } from "@app/components/ViewLink";
import type { FC } from "react";
import styles from "./MainPage.module.css";

export const MainPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Eugene Viktorov</div>
        <div className={styles.links}>
          <ViewLink to="https://github.com/eugeneviktorov" title="Github" />
          <ViewLink to="https://www.figma.com/@eugeneviktorov" title="Figma" />
          <ViewLink to="https://www.linkedin.com/in/eugeneviktorov" title="Linkedin" />
          <ViewLink to="mailto:eviktorovvv@gmail.com" title="eviktorovvv@gmail.com" />
        </div>
        <div>
          <div className={styles.reserved}>© Eugene Viktorov 2025</div>
          <div className={styles.reserved}>All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};
