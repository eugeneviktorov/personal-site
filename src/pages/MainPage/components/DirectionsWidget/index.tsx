import { FC } from "react";
import styles from "./DirectionsWidget.module.css";
import { IconButton } from "@app/ui/IconButton";
import { BrushIcon, DevIcon, InternetIcon, MobileIcon } from "@app/ui/Icons";
import { CategoryItem } from "./components/CategoryItem";
import { TitleWidget } from "../../../../components/TitleWidget";

export const DirectionsWidget: FC = () => {
  return (
    <div className={styles.container}>
      <TitleWidget title="Направления деятельности" />
      <div className={styles.grid}>
        <div className={styles.primaryColumn}>
          <CategoryItem
            icon={<IconButton noHover icon={<BrushIcon />} />}
            title="Дизайн"
            description="Лендинги | сайты"
          />
        </div>
        <div className={styles.secondColumn}>
          <CategoryItem
            icon={<IconButton noHover icon={<InternetIcon />} />}
            title="Веб приложения"
            description="Лендинги | сайты"
          />
        </div>
        <div className={styles.thirdColumn}>
          <CategoryItem
            icon={<IconButton noHover icon={<MobileIcon />} />}
            title="Моб. приложения"
            description="iOS | Android"
          />
        </div>
        <div className={styles.quaternaryColumn}>
          <CategoryItem
            icon={<IconButton noHover icon={<DevIcon />} />}
            title="Тестирование"
            description="По направлению"
          />
        </div>
      </div>
    </div>
  );
};
