import React from 'react';

type TabsType = {
  label: string;
  content: React.ReactElement;
};

type TabPropsType = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export type { TabPropsType, TabsType };
