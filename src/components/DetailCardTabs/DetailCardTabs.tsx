
import { TabTitles } from "./DetailCardTabsUi";
import { Tabs } from 'src/uiKit/Tabs';

export const DetailCardTabs = () => {
  return (
    <div className="mt-16">
      <Tabs tabs={TabTitles} />
    </div>
  );
};
