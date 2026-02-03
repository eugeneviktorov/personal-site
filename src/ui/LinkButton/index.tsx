import { FC } from "react";
import { useLocation, useNavigate } from "react-router";

import { ILinkButton } from "./LinkButton.types";
import { Button } from "../Button";
import { ButtonKind } from "../Button/Button.types";

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
