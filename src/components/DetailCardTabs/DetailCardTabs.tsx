"use client";

import { useState } from "react";
import { TabTitles } from "./DetailCardTabsUi";
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
