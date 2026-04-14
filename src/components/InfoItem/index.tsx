import type { FC } from "react";

import { IInfoItem } from "./InfoItem.types";

export const InfoItem: FC<IInfoItem> = ({ name, value }) => {
  return (
    <p>
      <b>{name}</b>: {value}
    </p>
  );
};
