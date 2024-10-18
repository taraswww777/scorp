"use client";

// react
import { useState } from "react";

// ui
import { TabTitles } from "./DetailCardTabsUi";

// uiKit
import { TabsList } from "src/uiKit/TabsList/TabsList";
import { TabsContent } from "src/uiKit/TabsContent/TabsContent";

export const DetailCardTabs = () => {
  const [openTabId, setOpenTabId] = useState(1);

  return (
    <>
      <TabsList
        allTabs={TabTitles}
        openTabId={openTabId}
        setOpenTabId={setOpenTabId}
      />

      <TabsContent allTabs={TabTitles} openTabId={openTabId} />
    </>
  );
};
