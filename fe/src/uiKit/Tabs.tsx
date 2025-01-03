"use client";
import { ReactNode, FC, useState } from 'react';
import { classNames } from 'src/utils/classNames';

export interface TabItem {
  tabId: string | number,
  tabTitle: string,
  tabContent: ReactNode,
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, defaultActiveTab }) => {
  const defaultTab = defaultActiveTab || tabs[0].tabId;
  const [activeTabId, setActiveTabId] = useState<TabItem['tabId']>(defaultTab);

  const activeTab = tabs.find(({ tabId }) => activeTabId === tabId);

  return (
    <div className="flex flex-wrap">
      <div className="w-full flex border-b transition-all">
        {tabs.map(({ tabId, tabTitle }) => {
          const isActive = tabId === activeTabId;

          return (
            <div
              key={tabId}
              className={classNames("px-4 pb-2 border-b",
                isActive && "border-b-slate-400",
              )}
            >
              <button
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tabId)}
                className="text-lg"
              >
                {tabTitle}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full p-4 pt-6">
        {activeTab?.tabContent}
      </div>
    </div>
  );
}
