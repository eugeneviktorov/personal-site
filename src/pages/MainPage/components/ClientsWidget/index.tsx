import { TitleWidget } from "@app/components/TitleWidget";
import { IconButton } from "@app/ui/IconButton";
import { CarIcon, CollegeIcon, DevIcon, WeatherIcon } from "@app/ui/Icons";
import { FC, useEffect, useRef } from "react";

import styles from "./ClientsWidget.module.css";
import { ClientItem } from "./components/ClientItem";

export const ClientsWidget: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const clone = container.innerHTML;
    container.innerHTML += clone;

    const speed = 0.3;
    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={styles.container}>
      <TitleWidget title="Клиенты" />
      <div className={styles.content} ref={scrollRef}>
        <ClientItem
          icon={<IconButton noHover icon={<WeatherIcon />} />}
          title="ООО «Инфометеос»"
          description="Научно-производственная компания"
        />
        <ClientItem icon={<IconButton noHover icon={<CarIcon />} />} title="ISUZU" description="Автотехцентр" />
        <ClientItem
          icon={<IconButton noHover icon={<DevIcon />} />}
          title="ООО «ИТ Адаптация»"
          description="Разработка программного обеспечения"
        />
        <ClientItem
          icon={<IconButton noHover icon={<CollegeIcon />} />}
          title="Сибирская региональная школа бизнеса"
          description="Профессиональная образовательная организация"
        />
      </div>
    </div>
  );
};
