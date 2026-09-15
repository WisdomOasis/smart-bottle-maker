/* eslint-disable import/no-duplicates */
import React from "react";
import "ray";
import "@/i18n";
import "./app.less";
import { SdmProvider } from "@ray-js/panel-sdk";
import { Text, View, initPanelEnvironment } from "@ray-js/ray";
import RayErrorCatch from "@ray-js/ray-error-catch";
import { devices } from "@/devices";
import composeLayout from "./composeLayout";

initPanelEnvironment({ useDefaultOffline: true });
const ErrorBoundary: React.FC = ({ children }) =>
  React.createElement(RayErrorCatch as any, null, children);

const APP_BG = "#f0f3f7";

class App extends React.Component<Props> {
  static defaultProps = {
    children: null,
  };

  initListener: number | null;

  readyPoll: ReturnType<typeof setInterval> | null;

  fallbackTimer: ReturnType<typeof setTimeout> | null;

  constructor(props: Props) {
    super(props);
    this.state = {
      deviceReady: Boolean(devices.common?.initialized),
    };
    this.initListener = null;
    this.readyPoll = null;
    this.fallbackTimer = null;
  }

  clearReadyWatchers = () => {
    if (this.initListener != null) {
      devices.common.offInitialized(this.initListener);
      this.initListener = null;
    }
    if (this.readyPoll != null) {
      clearInterval(this.readyPoll);
      this.readyPoll = null;
    }
    if (this.fallbackTimer != null) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = null;
    }
  };

  markDeviceReady = () => {
    if (this.state.deviceReady) {
      this.clearReadyWatchers();
      return;
    }
    this.clearReadyWatchers();
    this.setState({ deviceReady: true });
  };

  componentDidMount() {
    if (devices.common?.initialized) {
      this.markDeviceReady();
      return;
    }

    this.initListener = devices.common.onInitialized(() => {
      this.markDeviceReady();
    });

    this.readyPoll = setInterval(() => {
      if (devices.common?.initialized) {
        this.markDeviceReady();
      }
    }, 80);

    this.fallbackTimer = setTimeout(() => {
      this.markDeviceReady();
    }, 2500);
  }

  componentWillUnmount() {
    this.clearReadyWatchers();
  }

  render() {
    const { children } = this.props;
    const { deviceReady } = this.state;

    // Keep SdmProvider mounted once ready so page hooks are never swapped mid-tree.
    if (!deviceReady) {
      return (
        <ErrorBoundary>
          <View
            className="app-loading"
            style={{ backgroundColor: APP_BG, minHeight: "100vh" }}
          >
            <Text style={{ color: "rgba(45, 58, 74, 0.35)", fontSize: "14px" }}>
              ...
            </Text>
          </View>
        </ErrorBoundary>
      );
    }

    return (
      <ErrorBoundary>
        <SdmProvider value={devices.common}>{children}</SdmProvider>
      </ErrorBoundary>
    );
  }
}

export default composeLayout(App);
