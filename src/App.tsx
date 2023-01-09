import React from "react";
import { HomePage } from "./pages";
import { LayoutComponent } from "./components";
import "./App.css";

export const App: React.FC = (): JSX.Element => {
  return (
    <LayoutComponent>
      <HomePage />
    </LayoutComponent>
  );
};
