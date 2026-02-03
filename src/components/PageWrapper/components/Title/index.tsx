import { Helmet } from "@dr.pogodin/react-helmet";
import { FC } from "react";

import { ITitle } from "./Title.types";

export const Title: FC<ITitle> = ({ title }) => {
  return (
    <Helmet>
      <title>Viktorov {title && ` - ${title}`}</title>
    </Helmet>
  );
};
