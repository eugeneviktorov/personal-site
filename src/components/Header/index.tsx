import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { IconButton } from "@app/ui/IconButton";
import { BarsIcon } from "@app/ui/Icons";
import { LinkButton } from "@app/ui/LinkButton";
import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { LogotypeLink } from "./components/LogotypeLink";
import { MenuMobile } from "./components/MenuMobile";
import { ThemeButton } from "./components/ThemeButton";
import styles from "./Header.module.css";
import { IHeader } from "./Header.types";

export const Header: FC<IHeader> = ({ main, back }) => {
  const isMobile = useIsMobileQuery();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isHistory = window.history.length > 2;

  const buttonMain = (
    <LinkButton header to="/" className={styles.button}>
      Главная
    </LinkButton>
  );

  const globalMenu = (
    <div className={styles.content}>
      {main && (
        <>
          {buttonMain}
          <LinkButton header to="/projects" className={styles.button}>
            Проекты
          </LinkButton>
          <ThemeButton />
        </>
      )}
      {back && (
        <>
          {isHistory ? (
            <Button kind={ButtonKind.PRIMARY} onClick={() => navigate(-1)} className={styles.button}>
              ← Назад
            </Button>
          ) : (
            <LinkButton header to="/" className={styles.button}>
              ← Назад
            </LinkButton>
          )}
          <ThemeButton />
        </>
      )}
      {!main && !back && (
        <>
          <ThemeButton />
          {buttonMain}
        </>
      )}
    </div>
  );

  return isMobile ? (
    <>
      <div className={styles.container}>
        <LogotypeLink />
        <IconButton icon={<BarsIcon />} onClick={() => setMenuOpen(true)} />
      </div>
      <MenuMobile isOpen={isMenuOpen} onClose={() => setMenuOpen(false)}>
        {globalMenu}
      </MenuMobile>
    </>
  ) : (
    <div className={styles.container}>
      <LogotypeLink />
      {globalMenu}
    </div>
  );
};
