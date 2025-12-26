import { FC, useState } from "react";

import styles from "./Header.module.css";
import { IHeader } from "./Header.types";
import { BarsIcon } from "@app/ui/icons";
import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { useNavigate } from "react-router";
import { LinkButton } from "@app/ui/LinkButton";
import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import { IconButton } from "@app/ui/IconButton";
import { MenuMobile } from "./components/MenuMobile";
import { ThemeButton } from "../ThemeButton";
import { LogotypeLink } from "./components/LogotypeLink";

export const Header: FC<IHeader> = ({ main, back }) => {
  const isMobile = useIsMobileQuery();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isHistory = window.history.length > 2;

  const buttonMain = (
    <LinkButton header to="/">
      Главная
    </LinkButton>
  );

  const globalMenu = (
    <div className={styles.content}>
      {main && (
        <>
          {buttonMain}
          <LinkButton header to="/projects">
            Проекты
          </LinkButton>
          <ThemeButton />
        </>
      )}
      {back && (
        <>
          {isHistory ? (
            <Button kind={ButtonKind.PRIMARY} onClick={() => navigate(-1)}>
              ← Назад
            </Button>
          ) : (
            <LinkButton header to="/">
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
