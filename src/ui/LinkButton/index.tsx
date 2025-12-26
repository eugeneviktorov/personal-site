import { FC } from "react";

import { ILinkButton } from "./LinkButton.types";
import { useLocation, useNavigate } from "react-router";
import { ButtonKind } from "../Button/Button.types";
import { Button } from "../Button";

export const LinkButton: FC<ILinkButton> = ({ to, header, kind, className, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname === to;

  return (
    <Button
      kind={header ? (active ? ButtonKind.PRIMARY : ButtonKind.SECONDARY) : kind}
      onClick={() => navigate(to)}
      className={className}
    >
      {children}
    </Button>
  );
};
