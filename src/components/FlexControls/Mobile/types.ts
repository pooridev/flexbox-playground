import { CONTROL_TABS } from "./constants";

export type TabPanelIndex = (typeof CONTROL_TABS)[keyof typeof CONTROL_TABS];
