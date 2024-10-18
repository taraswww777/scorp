import { Dispatch, SetStateAction } from "react";

export interface ITabsList {
  id: number;
  title: string;
}

export interface ITabsListProps {
  allTabs: ITabsList[];
  openTabId: number;
  setOpenTabId: Dispatch<SetStateAction<number>>;
}

export type ITabsContentProps = Pick<ITabsListProps, "allTabs" | "openTabId">;
