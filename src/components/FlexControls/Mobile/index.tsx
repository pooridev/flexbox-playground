import Tabs from "@mui/material/Tabs";
import FlexContainerControls from "../FlexContainerControls";
import FlexItemControls from "../FlexItemControls";
import { ReactNode, SyntheticEvent, useState } from "react";
import { CONTROL_TABS } from "./constants";
import { Box, Stack, Tab } from "@mui/material";
import { TabPanelIndex } from "./types";

const MobileControls = () => {
  const [activeTab, setActiveTab] = useState<TabPanelIndex>(CONTROL_TABS.CONTAINER);

  const handleTabChange = (_: SyntheticEvent, newTab: TabPanelIndex) => {
    setActiveTab(newTab);
  };

  return (
    <Stack height="37dvh">
      <Tabs onChange={handleTabChange} value={activeTab} textColor="inherit" variant="fullWidth">
        <Tab label="Container props" value={CONTROL_TABS.CONTAINER} />
        <Tab label="Item props" value={CONTROL_TABS.ITEM} />
      </Tabs>

      <TabPanel index={1} activeTab={activeTab}>
        <FlexContainerControls />
      </TabPanel>

      <TabPanel index={2} activeTab={activeTab}>
        <FlexItemControls />
      </TabPanel>
    </Stack>
  );
};

interface TabPanelProps {
  activeTab: TabPanelIndex;
  index: TabPanelIndex;
  children: ReactNode;
}

const TabPanel = ({ activeTab, index, children }: TabPanelProps) => {
  if (activeTab != index) return null;

  return children;
};

export default MobileControls;
