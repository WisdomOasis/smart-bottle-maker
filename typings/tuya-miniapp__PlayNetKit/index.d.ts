
declare namespace ty.playnet {
  
  export function startScanDevice(params: {
    
    scanType: string[]
    
    token?: string
    
    ssid?: string
    
    password?: string
    
    timeout?: number
    
    gwId?: string
    
    deviceIds?: string[]
    
    spaceId: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopScanDevice(params: {
    
    scanType: string[]
    
    token?: string
    
    ssid?: string
    
    password?: string
    
    timeout?: number
    
    gwId?: string
    
    deviceIds?: string[]
    
    spaceId: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startDeviceActivate(params: {
    
    activeModel: string
    
    relationId: number
    
    spaceId: number
    
    token?: string
    
    ssid?: string
    
    cipher?: string
    
    timeout?: number
    
    gwId?: string
    
    uuid?: string
    
    mac?: string
    
    installCode?: string
    
    subDevMac?: string
    
    pid?: string
    
    icon?: string
    
    groupType?: string
    
    devId?: string
    
    deviceName?: string
    
    securityConfig?: string
    
    thingActivatorScanDeviceBean?: ScanDeviceResponse
    
    lightningSearchBeans?: ScanDeviceResponse[]
    
    meshSearchBeans?: ScanDeviceResponse[]
    
    subSearchBeans?: ScanDeviceResponse[]
    
    currentMeshBean?: BlueMeshBean
    
    hgwBean?: HgwBean
    
    matterPayload?: SetupPayload
    
    connectResult?: ConnectResult
    
    scanDeviceBean?: ScanDeviceBean
    
    extensions?: any
    
    qrCodeStr?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopDeviceActivate(params: {
    
    activeModel: string
    
    relationId: number
    
    spaceId: number
    
    token?: string
    
    ssid?: string
    
    cipher?: string
    
    timeout?: number
    
    gwId?: string
    
    uuid?: string
    
    mac?: string
    
    installCode?: string
    
    subDevMac?: string
    
    pid?: string
    
    icon?: string
    
    groupType?: string
    
    devId?: string
    
    deviceName?: string
    
    securityConfig?: string
    
    thingActivatorScanDeviceBean?: ScanDeviceResponse
    
    lightningSearchBeans?: ScanDeviceResponse[]
    
    meshSearchBeans?: ScanDeviceResponse[]
    
    subSearchBeans?: ScanDeviceResponse[]
    
    currentMeshBean?: BlueMeshBean
    
    hgwBean?: HgwBean
    
    matterPayload?: SetupPayload
    
    connectResult?: ConnectResult
    
    scanDeviceBean?: ScanDeviceBean
    
    extensions?: any
    
    qrCodeStr?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function analysisMatterQRCode(params: {
    
    qrCodeStr: string
    complete?: () => void
    success?: (params: {
      
      version?: number
      
      vendorId?: number
      
      productId?: number
      
      setupPinCode?: number
      
      commissioningFlow?: number
      
      optionalQrCodeInfoMap?: any
      
      discoveryCapabilities?: number[]
      
      discriminator?: Discriminator
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function connectMatterDevice(params: {
    
    setupPayload?: SetupPayload
    
    spaceId: number
    
    timeout: number
    
    gwId?: string
    complete?: () => void
    success?: (params: {
      
      discoveryType?: string
      
      port?: number
      
      ipAddress?: string
      
      uuid?: string
      
      thingProductId?: string
      
      accessType?: number
      
      nodeId?: number
      
      isThingMatter?: boolean
      
      matterDeviceType?: number
      
      gwId?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function continueMatterCommission(params: {
    
    activeModel: string
    
    relationId: number
    
    spaceId: number
    
    token?: string
    
    ssid?: string
    
    cipher?: string
    
    timeout?: number
    
    gwId?: string
    
    uuid?: string
    
    mac?: string
    
    installCode?: string
    
    subDevMac?: string
    
    pid?: string
    
    icon?: string
    
    groupType?: string
    
    devId?: string
    
    deviceName?: string
    
    securityConfig?: string
    
    thingActivatorScanDeviceBean?: ScanDeviceResponse
    
    lightningSearchBeans?: ScanDeviceResponse[]
    
    meshSearchBeans?: ScanDeviceResponse[]
    
    subSearchBeans?: ScanDeviceResponse[]
    
    currentMeshBean?: BlueMeshBean
    
    hgwBean?: HgwBean
    
    matterPayload?: SetupPayload
    
    connectResult?: ConnectResult
    
    scanDeviceBean?: ScanDeviceBean
    
    extensions?: any
    
    qrCodeStr?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function resumeActive(params?: {
    
    resumeType?: number
    
    uuid?: string
    
    ssid?: string
    
    pwd?: string
    
    maxWifiCount?: number
    
    wifiRequestMaxTime?: number
    
    scanType?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function requestWifiList(params?: {
    
    uuid?: string
    
    size?: number
    
    timeout?: number
    
    scanType?: string
    complete?: () => void
    success?: (params: {
      
      wifiList: WifiInfoBean[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function resetDeviceActivatedStatus(params: {
    
    tokens: string[]
    
    scanDeviceBeans: ScanDeviceResponse[]
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function hasPermission(params: {
    
    permission: string
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function requestPermission(params: {
    
    permission: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startBLEScanDevice(params: {
    
    timeout: number
    
    scanType: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopBLEScan(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function queryDeviceConfigState(params: {
    
    homeId: number
    
    timeout?: number
    
    pairType: string
    
    bleWifiPairParams: ScanDevicePacket
    
    apPairParams?: ApQueryParam
    complete?: () => void
    success?: (params: WiFiInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startActivator(params: {
    
    pairType: string
    
    apActivatorParams: ApActivatorParam
    
    bleWifiActivatorParams: BleWifiActivatorParam
    complete?: () => void
    success?: (params: {
      
      devId: string
      
      name: string
      
      roomId: string
      
      iconUrl: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopActivator(params: {
    
    uuid: string
    
    pairType: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function autoConnectToAp(params: {
    
    ssidPrefix: string
    
    ssid: string
    
    pwd: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function connectWifi(params: {
    
    ssidPrefix: string
    
    ssid: string
    
    pwd: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function autoConnectToApWithSSIDPrefix(params: {
    
    ssidPrefix: string
    
    ssid: string
    
    pwd: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function removeApConfigration(params: {
    
    ssidPrefix: string
    
    ssid: string
    
    pwd: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function getPairConfigToken(params: {
    
    gid: number
    complete?: () => void
    success?: (params: string) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function resetDevice(params: {
    
    uuid: string
    
    pairType: string
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function getDeviceSecurityConfigs(params?: {
    complete?: () => void
    success?: (params: string) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function isSystemPopupInAutoConnectAp(params?: {
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function hasBlePermission(params?: {
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function hasLocalNetworkPermission(params?: {
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startActivatorNormal(params: {
    
    pairType: string
    
    apParams: ApNormalActivatorParam
    
    bleWifiParams: BleWifiNormalActivatorParam
    complete?: () => void
    success?: (params: {
      
      devId: string
      
      name: string
      
      roomId: string
      
      iconUrl: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopActivatorNormal(params: {
    
    uuid: string
    
    pairType: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function queryWifiListByNormalChannel(params: {
    
    timeout: number
    
    size: number
    
    pairType: string
    
    uuid: string
    complete?: () => void
    success?: (params: WiFiInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startScanWifi(params?: {
    complete?: () => void
    success?: (params: WifiScanInfo[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function releaseP2PWifi(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function getCurrentWifiSSID(params?: {
    complete?: () => void
    success?: (params: string) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startBLEScanDeviceWithUUID(params: {
    
    timeout?: number
    
    scanType: string
    
    uuid: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function stopBleScanWithUUID(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function checkBleWifiDeviceReset(params: {
    
    link: string
    
    packet: ScanDevicePacket
    complete?: () => void
    success?: (params: {
      
      businessCode: number
      
      encryptedAuthKey?: string
      
      random?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function startResetBleWifiDevice(params: {
    
    packet: ScanDevicePacket
    
    encryptedAuthKey: string
    
    random: string
    complete?: () => void
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function isExistInCurrentAccount(params: {
    
    uuid: string
    
    mac: string
    complete?: () => void
    success?: (params: {
      
      exists: boolean
      
      devId?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function onActivateIntermediateState(
    listener: (params: IntermediateStateResponse) => void
  ): void

  
  export function offActivateIntermediateState(
    listener: (params: IntermediateStateResponse) => void
  ): void

  
  export function onScanDeviceInfo(
    listener: (params: ScanDeviceResponse) => void
  ): void

  
  export function offScanDeviceInfo(
    listener: (params: ScanDeviceResponse) => void
  ): void

  
  export function onDeviceActivateResult(
    listener: (params: DeviceActivateResultResponse) => void
  ): void

  
  export function offDeviceActivateResult(
    listener: (params: DeviceActivateResultResponse) => void
  ): void

  
  export function onBLEScanDevice(
    listener: (params: ScanDevicePacket) => void
  ): void

  
  export function offBLEScanDevice(
    listener: (params: ScanDevicePacket) => void
  ): void

  
  export function onWifiStateChange(listener: (params: Privacy) => void): void

  
  export function offWifiStateChange(listener: (params: Privacy) => void): void

  
  export function onBLEStateChange(listener: (params: Privacy) => void): void

  
  export function offBLEStateChange(listener: (params: Privacy) => void): void

  
  export function onBlePermissionChange(
    listener: (params: Privacy) => void
  ): void

  
  export function offBlePermissionChange(
    listener: (params: Privacy) => void
  ): void

  
  export function onlocalNetWorkPermissionChange(
    listener: (params: Privacy) => void
  ): void

  
  export function offlocalNetWorkPermissionChange(
    listener: (params: Privacy) => void
  ): void

  
  export function onReceiveActivatorState(
    listener: (params: ConfigState) => void
  ): void

  
  export function offReceiveActivatorState(
    listener: (params: ConfigState) => void
  ): void

  
  export function onBLEScanDeviceWithUUID(
    listener: (params: ScanDevicePacket) => void
  ): void

  
  export function offBLEScanDeviceWithUUID(
    listener: (params: ScanDevicePacket) => void
  ): void

  export type ScanDeviceResponse = {
    
    uniqueId?: string
    
    name?: string
    
    icon?: string
    
    pid?: string
    
    scanDeviceTypeList?: string[]
    
    supportActivatorTypeList?: string[]
    
    matterDeviceType?: number
    
    isThingMatter?: boolean
    
    errorCode?: string
  }

  export type BlueMeshBean = {
    
    resptime: number
    
    localKey: string
    
    meshId?: string
    
    name?: string
    
    pv?: string
    
    code?: string
    
    password?: string
    
    share?: boolean
  }

  export type HgwBean = {
    
    ip: string
    
    gwId: string
    
    active?: number
    
    ablilty?: number
    
    lastSeenTime?: number
    
    mode?: number
    
    productKey?: string
    
    encrypt?: boolean
    
    version: string
    
    token?: boolean
    
    wf_cfg?: boolean
    
    extend?: string
    
    ssid?: string
    
    devConfigAttribute?: number
    
    apConfigType?: number
    
    sl?: number
    
    uuid?: string
    
    proAbility?: number
  }

  export type SetupPayload = {
    
    version?: number
    
    vendorId?: number
    
    productId?: number
    
    setupPinCode?: number
    
    commissioningFlow?: number
    
    optionalQrCodeInfoMap?: any
    
    discoveryCapabilities?: number[]
    
    discriminator?: Discriminator
  }

  export type ConnectResult = {
    
    discoveryType?: string
    
    port?: number
    
    ipAddress?: string
    
    uuid?: string
    
    thingProductId?: string
    
    accessType?: number
    
    nodeId?: number
    
    isThingMatter?: boolean
    
    matterDeviceType?: number
    
    gwId?: string
  }

  export type ScanDeviceBean = {
    
    id?: string
    
    name?: string
    
    providerName?: string
    
    data?: string
    
    configType?: string
    
    productId?: string
    
    uuid?: string
    
    mac?: string
    
    address?: string
    
    deviceType?: number
    
    isbind?: boolean
    
    flag?: number
    
    isShare?: boolean
    
    isRoam?: boolean
  }

  export type Discriminator = {
    
    value?: number
    
    shortDiscriminator?: boolean
  }

  export type WifiInfoBean = {
    
    ssid?: string
    
    rssi?: number
    
    sec?: number
  }

  export type ScanDevicePacket = {
    
    id: string
    
    name: string
    
    providerName: string
    
    data: string
    
    configType: string
    
    productId: string
    
    uuid: string
    
    mac: string
    
    address: string
    
    deviceType: number
    
    isbind: boolean
    
    flag: number
    
    isShare: boolean
    
    rssi: number
    
    pidHexString: string
  }

  export type ApQueryParam = {
    
    pin: string
    
    uuid: string
  }

  export type WiFiInfo = {
    
    ssid: string
    
    rssi: number
    
    sec: number
  }

  export type ApActivatorParam = {
    
    ssid: string
    
    pwd: string
    
    token: string
    
    timeout: number
    
    isRecovery: boolean
    
    securityConfig: string
  }

  export type BleWifiActivatorParam = {
    
    uuid: string
    
    ssid: string
    
    pwd: string
    
    token: string
    
    timeout: number
    
    isRecovery: boolean
    
    phase1Timeout: number
  }

  export type ApNormalActivatorParam = {
    
    homeId: number
    
    ssid: string
    
    pwd: string
    
    token: string
    
    timeout: number
    
    isRecovery: boolean
    
    securityConfig: string
  }

  export type BleWifiNormalActivatorParam = {
    
    homeId: number
    
    uuid: string
    
    ssid: string
    
    pwd: string
    
    token: string
    
    timeout: number
    
    isRecovery: boolean
    
    phase1Timeout: number
    
    bleWifiPacket: ScanDevicePacket
  }

  export type WifiScanInfo = {
    
    wifiType: number
    
    ssid: string
    
    bssid: string
    
    level: number
    
    isNeedPwd: boolean
    
    signalStrengthLevel: number
    
    capabilities: string
  }

  export type IntermediateStateResponse = {
    
    uuid: string
    
    configStage: number
    
    state: number
    
    matterDeviceType: number
    
    isThingMatter: boolean
  }

  export type DeviceActivateResultResponse = {
    
    deviceId?: string
    
    activeModel?: string
    
    errorCode?: string
  }

  export type Privacy = {
    
    enable: boolean
  }

  export type ConfigState = {
    
    stage: number
    
    status: number
    
    uuid: string
  }

  export type PermissionParam = {
    
    permission: string
  }

  export type BLEScanParam = {
    
    timeout: number
    
    scanType: string
  }

  export type QueryConfigParam = {
    
    homeId: number
    
    timeout?: number
    
    pairType: string
    
    bleWifiPairParams: ScanDevicePacket
    
    apPairParams?: ApQueryParam
  }

  export type ActivatorParam = {
    
    pairType: string
    
    apActivatorParams: ApActivatorParam
    
    bleWifiActivatorParams: BleWifiActivatorParam
  }

  export type DeviceInfo = {
    
    devId: string
    
    name: string
    
    roomId: string
    
    iconUrl: string
  }

  export type StopActivatorParam = {
    
    uuid: string
    
    pairType: string
  }

  export type SsidInfo = {
    
    ssidPrefix: string
    
    ssid: string
    
    pwd: string
  }

  export type TokenParam = {
    
    gid: number
  }

  export type ActivatorNormalParam = {
    
    pairType: string
    
    apParams: ApNormalActivatorParam
    
    bleWifiParams: BleWifiNormalActivatorParam
  }

  export type QueryWifiListParam = {
    
    timeout: number
    
    size: number
    
    pairType: string
    
    uuid: string
  }

  export type BLEScanMatchParam = {
    
    timeout?: number
    
    scanType: string
    
    uuid: string
  }

  export type CheckDeviceParam = {
    
    link: string
    
    packet: ScanDevicePacket
  }

  export type CheckResultCallBack = {
    
    businessCode: number
    
    encryptedAuthKey?: string
    
    random?: string
  }

  export type ResetDeviceParam = {
    
    packet: ScanDevicePacket
    
    encryptedAuthKey: string
    
    random: string
  }

  export type JudgmentParam = {
    
    uuid: string
    
    mac: string
  }

  export type SuccessInfo = {
    
    exists: boolean
    
    devId?: string
  }
}
