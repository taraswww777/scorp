import { FC, PropsWithChildren } from "react";
import { Tag, TagProps } from "./Tag";
import { Icons } from "src/uiKit";

export const TagComments: FC<PropsWithChildren<TagProps>> = ({
  children,
  type,
}) => {
  return (
    <Tag type={type}>
      <Icons.Comments />
      {children}
    </Tag>
  );
};
