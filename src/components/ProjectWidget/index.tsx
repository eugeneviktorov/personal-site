import type { FC } from "react";
import styles from "./ProjectWidget.module.css";
import { TitleWidget } from "../TitleWidget";
import { IItem } from "./components/ProjectItem/ProjectItem.types";

import projectsData from "../../../public/projects/projects.json";
import { ProjectItem } from "./components/ProjectItem";
import { IProjectWidget } from "./ProjectWidget.types";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { LinkButton } from "@app/ui/LinkButton";

export const ProjectWidget: FC<IProjectWidget> = ({ favorite }) => {
  const projectItem: IItem[] = projectsData;
  const projectsFiltered = favorite ? projectItem.filter((item) => item.favorite) : projectItem;

  return (
    <div className={styles.container}>
      <TitleWidget title="Проекты" />
      <div className={styles.grid}>
        {projectsFiltered.map((item, index) => (
          <ProjectItem key={index} item={item} />
        ))}
      </div>
      {favorite && (
        <LinkButton to={"/projects"} kind={ButtonKind.PRIMARY}>
          Все работы →
        </LinkButton>
      )}
    </div>
  );
};
