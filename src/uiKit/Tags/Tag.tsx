import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

export const enum TagTypes {
  gray = "gray",
  white = "white",
}

export interface TagProps {
  type?: TagTypes;
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  // type = TagTypes.gray,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-nowrap gap-2.75 rounded-lg px-2.75 py-2.25 text-textSecondary font-medium overflow-hidden text-base group-hover:bg-hover group-hover:transition-colors group-hover:cursor-pointer"
        // {
        //   "bg-hover px-2.75 py-2.25": type === TagTypes.gray,
        // }
      )}
    >
      {/*className="bg-hover flex flex-nowrap gap-2.75 px-2.75 py-2.25 rounded-lg text-textSecondary font-medium text-xl overflow-hidden">*/}
      {children}
    </div>
  );
};
