import classNames from "classnames";
import { ITabsListProps } from "src/types/Tabs/Tabs";

export const TabsList = ({
  allTabs,
  openTabId,
  setOpenTabId,
}: ITabsListProps) => {
  return (
    <div
      role="tablist"
      aria-labelledby="tabs-label"
      className="flex mt-16 border-b transition-all"
    >
      {allTabs.map((el) => (
        <div
          key={el.id}
          className={classNames("px-4 pb-2 border-b", {
            "border-b-slate-400": openTabId === el.id,
          })}
        >
          <button
            role="tab"
            type="button"
            aria-selected={openTabId === el.id ? "true" : "false"}
            onClick={() => setOpenTabId(el.id)}
            className="text-lg"
          >
            {el.title}
          </button>
        </div>
      ))}
    </div>
  );
};
