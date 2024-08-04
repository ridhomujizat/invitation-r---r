import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';

const customTheme = {
  token: {
    colorPrimary: '#976C74', // Custom primary color
    borderRadiusBase: '5px', // Custom border radius
  },
};

interface ThemingProps {
  children: ReactNode;
}

export default function Theming({ children }: ThemingProps) {
  return (
    <ConfigProvider theme={customTheme}>
        {children}
    </ConfigProvider>
  );
}