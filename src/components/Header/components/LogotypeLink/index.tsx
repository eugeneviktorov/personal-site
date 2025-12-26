import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import { Logotype, LogotypeIcon } from "@app/ui/icons";
import { FC } from "react";
import { Link } from "react-router";

import styles from "./LogotypeLink.module.css";

export const LogotypeLink: FC = () => {
  const isMobile = useIsMobileQuery();
  const link = "/";

  return isMobile ? (
    <Link to={link} className={styles.container}>
      <LogotypeIcon width={30} height={30} />
    </Link>
  ) : (
    <Link to={link} className={styles.container}>
      <Logotype width={154} height={38} />
    </Link>
  );
};
