import { Helmet } from "@dr.pogodin/react-helmet";
import { FC } from "react";
import { ITitle } from "./Title.types";

export const Title: FC<ITitle> = ({ children }) => {
  return (
    <Helmet>
      <title>Viktorov {children && ` - ${children}`}</title>
    </Helmet>
  );
};
