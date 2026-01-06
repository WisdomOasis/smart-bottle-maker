/* eslint-disable import/no-duplicates */
import React from "react";
import "ray";
import "@/i18n";
import "./app.less";
import { SdmProvider } from "@ray-js/panel-sdk";
import { initPanelEnvironment } from "@ray-js/ray";
import RayErrorCatch from "@ray-js/ray-error-catch";
import { devices } from "@/devices";
import composeLayout from "./composeLayout";

initPanelEnvironment({ useDefaultOffline: true });
const ErrorBoundary: React.FC = ({ children }) =>
  React.createElement(RayErrorCatch as any, null, children);

class App extends React.Component {
  static defaultProps = {
    children: null,
  };

  render() {
    return (
      <ErrorBoundary>
        <SdmProvider value={devices.common}>{this.props.children}</SdmProvider>
      </ErrorBoundary>
    );
  }
}

export default composeLayout(App);
