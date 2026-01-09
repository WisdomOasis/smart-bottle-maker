
declare namespace ty.wear {
  
  export function qqMusicAuth(params: {
    
    type: number
    success?: (params: {
      
      expireTime: number
      
      openId: string
      
      openToken: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getQQMusicQQMiniProgramAuthParams(params?: {
    success?: (params: {
      
      qqMusicAppKey: string
      
      encryptString: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function parseQQMusicAuthResult(params: {
    
    encryptString: string
    success?: (params: {
      
      expireTime: number
      
      openId: string
      
      openToken: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getLocalSupportAppList(params?: {
    success?: (params: {
      
      array: number[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function isSync(params: {
    
    deviceId: string
    
    syncType: number
    success?: (params: boolean) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function listenStockSync(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function checkAndCoverStocks(params: {
    
    deviceId: string
    
    stocks: Stock[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function addStock(params: {
    
    deviceId: string
    
    stock: Stock
    
    originalStocks: Stock[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function deleteStock(params: {
    
    deviceId: string
    
    stock: Stock
    
    originalStocks: Stock[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function sortStocks(params: {
    
    deviceId: string
    
    stocks: Stock[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function appHasInstall(params: {
    
    packageName: string
    success?: (params: { hasInstall?: boolean }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function appHasInstallSync(data?: HasInstallBean): {
    hasInstall?: boolean
  }

  
  export function setup(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function detect(params: {
    
    channel: number
    
    hz: number
    
    db: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopDetect(params?: {
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function publishGains(params: {
    
    deviceId: string
    
    scene: number[]
    
    result: SoundDetectResult[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startRecord(params: {
    
    deviceId: string
    
    config: StartRecordConfig
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function switchRecordChannel(params: {
    
    deviceId: string
    
    recordChannel: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function pauseRecord(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function resumeRecord(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopRecord(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function recordTask(params: {
    
    deviceId: string
    success?: (params: {
      
      task?: RecordTask
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getDeviceOfflineFileStatus(params: {
    
    deviceId: string
    success?: (params: {
      
      status: number
      
      sessionId: number
      
      response: OfflineFilesResponse
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function loadOfflineFile(params: {
    
    deviceId: string
    
    channel: number
    
    sessionId: number
    success?: (params: number) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function addFile(params: {
    
    deviceUniqueId: string
    
    name: string
    
    recordTime: number
    
    duration: number
    
    recordType: number
    
    audioFormat: number
    
    deviceId: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status: number
    
    source: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateFile(params: {
    
    fileId: number
    
    directoryId?: string
    
    name?: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status?: string
    
    visit?: string
    
    remove?: string
    
    storageKey?: string
    
    transfer?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function batchUpdateTransfer(params: {
    
    files: FileTransferItem[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeFile(params: {
    
    fileId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeFileList(params?: {
    
    fileIds?: number[]
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function files(params?: {
    
    directoryId?: string
    
    recordType?: string
    
    deviceId?: string
    
    remove?: string
    
    transfer?: string
    
    source?: string
    
    orderBy?: string
    
    asc?: string
    
    lastFileId?: number
    
    pageSize?: number
    success?: (params: File[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function countFiles(params?: {
    
    directoryId?: string
    
    recordType?: string
    
    source?: string
    
    deviceId?: string
    
    remove?: string
    success?: (params: {
      
      count: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function file(params: {
    
    fileId: number
    
    ext?: FileParamsExt
    success?: (params: {
      
      fileId: number
      
      directoryId: number
      
      deviceUniqueId: string
      
      name: string
      
      recordTime: number
      
      duration: number
      
      recordType: number
      
      audioFormat: number
      
      deviceId: string
      
      filePath?: string
      
      wavFilePath?: string
      
      amplitudes?: string
      
      status: number
      
      visit: boolean
      
      remove: boolean
      
      storageKey?: string
      
      transfer: number
      
      source: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function addDirectory(params: {
    
    name: string
    
    color?: string
    
    icon?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateDirectory(params: {
    
    directoryId: number
    
    name: string
    
    color?: string
    
    icon?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeDirectory(params: {
    
    directoryId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function directories(params?: {
    
    orderBy?: string
    
    asc?: string
    success?: (params: Directory[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function transfer(params: {
    
    fileId: number
    
    template: string
    
    language: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function startRecordTransfer(params: {
    
    deviceId: string
    
    config: StartRecordTransferConfig
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function pauseRecordTransfer(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function resumeRecordTransfer(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function stopRecordTransfer(params: {
    
    deviceId: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function recordTransferTask(params: {
    
    deviceId: string
    success?: (params: {
      
      task?: RecordTransferTask
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferRealTimeResult(params?: {
    
    fileId?: string
    
    recordId?: string
    
    asrId?: string
    success?: (params: {
      
      list?: RecordTransferRealTimeItem[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferTemplate(params: {
    
    deviceId: string
    
    bizType: string
    success?: (params: {
      
      result: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function processRecordTransferResult(params: {
    
    recordTransferId: number
    
    template: string
    
    language: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferProcessStatus(params: {
    
    deviceId: string
    
    fileIds: string[]
    success?: (params: {
      
      success: string[]
      
      fail: string[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferRecognizeResult(params: {
    
    recordTransferId: number
    
    from: number
    success?: (params: {
      
      text: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferSummaryResult(params: {
    
    recordTransferId: number
    
    from: number
    success?: (params: {
      
      text: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function saveRecordTransferRecognizeResult(params: {
    
    recordTransferId: number
    
    text: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function saveRecordTransferSummaryResult(params: {
    
    recordTransferId: number
    
    text: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function saveRecordTransferRealTimeRecognizeResult(params: {
    
    asrId: number
    
    text?: string
    
    asr?: string
    
    translate?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferResultList(params?: {
    
    directoryId?: string
    
    recordType?: string
    
    deviceId?: string
    
    remove?: string
    
    transfer?: string
    
    source?: string
    
    orderBy?: string
    
    asc?: string
    
    lastRecordTransferId?: string
    
    pageSize?: number
    success?: (params: RecordTransferResult[]) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function getRecordTransferResultDetail(params: {
    
    recordTransferId: number
    
    amplitudeMaxCount?: string
    success?: (params: {
      
      recordTransferId: number
      
      directoryId: number
      
      deviceUniqueId: string
      
      name: string
      
      recordTime: number
      
      duration: number
      
      recordType: number
      
      audioFormat: number
      
      deviceId: string
      
      filePath?: string
      
      wavFilePath?: string
      
      amplitudes?: string
      
      status: number
      
      visit: boolean
      
      remove: boolean
      
      storageKey?: string
      
      transfer: number
      
      source: number
      
      transferType: number
      
      needTranslate: boolean
      
      originalLanguage?: string
      
      targetLanguage?: string
      
      recordId?: string
      
      agentId?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function updateRecordTransferResult(params: {
    
    recordTransferId: number
    
    directoryId?: string
    
    name?: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status?: string
    
    visit?: string
    
    remove?: string
    
    storageKey?: string
    
    transfer?: string
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function removeRecordTransferResult(params: {
    
    recordTransferId: number
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
    complete?: () => void
  }): void

  
  export function onWechatAuthAgentEvent(
    listener: (params: QQMusicAuthResult) => void
  ): void

  
  export function offWechatAuthAgentEvent(
    listener: (params: QQMusicAuthResult) => void
  ): void

  
  export function onStockSyncUpdate(
    listener: (params: StockSyncData) => void
  ): void

  
  export function offStockSyncUpdate(
    listener: (params: StockSyncData) => void
  ): void

  
  export function onPublishGainsProgress(
    listener: (params: Object) => void
  ): void

  
  export function offPublishGainsProgress(
    listener: (params: Object) => void
  ): void

  
  export function onOfflineFilesProgressEvent(
    listener: (params: DeviceOfflineFileStatus) => void
  ): void

  
  export function offOfflineFilesProgressEvent(
    listener: (params: DeviceOfflineFileStatus) => void
  ): void

  
  export function onRecordFinishEvent(
    listener: (params: RecordFinishError) => void
  ): void

  
  export function offRecordFinishEvent(
    listener: (params: RecordFinishError) => void
  ): void

  
  export function onRecordAmplitudeUpdateEvent(
    listener: (params: Amplitude) => void
  ): void

  
  export function offRecordAmplitudeUpdateEvent(
    listener: (params: Amplitude) => void
  ): void

  
  export function onRecordStatusUpdateEvent(
    listener: (params: RecordStatus) => void
  ): void

  
  export function offRecordStatusUpdateEvent(
    listener: (params: RecordStatus) => void
  ): void

  
  export function onRecordTransferFinishEvent(
    listener: (params: RecordTransferFinishError) => void
  ): void

  
  export function offRecordTransferFinishEvent(
    listener: (params: RecordTransferFinishError) => void
  ): void

  
  export function onRecordTransferAmplitudeUpdateEvent(
    listener: (params: RecordTransferAmplitude) => void
  ): void

  
  export function offRecordTransferAmplitudeUpdateEvent(
    listener: (params: RecordTransferAmplitude) => void
  ): void

  
  export function onRecordTransferStatusUpdateEvent(
    listener: (params: RecordTransferStatus) => void
  ): void

  
  export function offRecordTransferStatusUpdateEvent(
    listener: (params: RecordTransferStatus) => void
  ): void

  
  export function onRecordTransferFileUploadEvent(
    listener: (params: FileUploadProgress) => void
  ): void

  
  export function offRecordTransferFileUploadEvent(
    listener: (params: FileUploadProgress) => void
  ): void

  
  export function onRecordTransferRealTimeRecognizeStatusUpdateEvent(
    listener: (params: RecordTransferRealTimeRecognizeStatus) => void
  ): void

  
  export function offRecordTransferRealTimeRecognizeStatusUpdateEvent(
    listener: (params: RecordTransferRealTimeRecognizeStatus) => void
  ): void

  export type Stock = {
    
    symbol: string
    
    name: string
    
    openingPrice: number
    
    currentPrice: number
  }

  export type HasInstallBean = {
    
    packageName: string
  }

  export type SoundDetectResult = {
    
    channel: number
    
    hz: number
    
    db: number
  }

  export type StartRecordConfig = {
    
    saveDataWhenError: boolean
    
    recordChannel: number
    
    recordType: number
    
    controlTimeout: number
    
    dataTimeout: number
  }

  export type RecordTask = {
    
    state: number
    
    userRecordDuration: number
    
    recordType: number
    
    isStarting: boolean
    
    isPausing: boolean
    
    isResuming: boolean
    
    isStoping: boolean
  }

  export type OfflineFilesResponse = {
    
    channel: number
    
    speed: number
    
    total: number
    
    size: number
    
    curFile: FileDigest
    
    files_waiting: FileDigest[]
    
    files_failed: FileDigest[]
    
    files_transform: FileDigest[]
    
    files_successed: FileDigest[]
  }

  export type FileTransferItem = {
    
    fileId: number
    
    transfer: number
  }

  export type File = {
    
    fileId: number
    
    directoryId: number
    
    deviceUniqueId: string
    
    name: string
    
    recordTime: number
    
    duration: number
    
    recordType: number
    
    audioFormat: number
    
    deviceId: string
    
    filePath?: string
    
    wavFilePath?: string
    
    amplitudes?: string
    
    status: number
    
    visit: boolean
    
    remove: boolean
    
    storageKey?: string
    
    transfer: number
    
    source: number
  }

  export type FileParamsExt = {
    
    amplitudeMaxCount: number
  }

  export type Directory = {
    
    directoryId: number
    
    name: string
    
    color?: string
    
    icon?: string
  }

  export type StartRecordTransferConfig = {
    
    recordType: number
    
    controlTimeout: number
    
    recordChannel: number
    
    f2fChannel: number
    
    dataTimeout: number
    
    transferType: number
    
    needTranslate: boolean
    
    originalLanguage?: string
    
    targetLanguage?: string
    
    agentId?: string
    
    ttsEncode?: number
    
    needTts: boolean
  }

  export type RecordTransferTask = {
    
    state: number
    
    userRecordDuration: number
    
    recordType: number
    
    transferType: number
    
    needTranslate: boolean
    
    originalLanguage?: string
    
    targetLanguage?: string
    
    isStarting: boolean
    
    isPausing: boolean
    
    isResuming: boolean
    
    isStoping: boolean
    
    currentRealTimeAsrId?: string
    
    recordId?: string
  }

  export type RecordTransferRealTimeItem = {
    
    asrId: number
    
    recordTransferId: number
    
    beginOffset: number
    
    endOffset: number
    
    text?: string
    
    requestId: string
    
    recordId: string
    
    channel: number
    
    status: number
    
    asr?: string
    
    translate?: string
  }

  export type RecordTransferResult = {
    
    recordTransferId: number
    
    directoryId: number
    
    deviceUniqueId: string
    
    name: string
    
    recordTime: number
    
    duration: number
    
    recordType: number
    
    audioFormat: number
    
    deviceId: string
    
    filePath?: string
    
    wavFilePath?: string
    
    amplitudes?: string
    
    status: number
    
    visit: boolean
    
    remove: boolean
    
    storageKey?: string
    
    transfer: number
    
    source: number
    
    transferType: number
    
    needTranslate: boolean
    
    originalLanguage?: string
    
    targetLanguage?: string
    
    recordId?: string
    
    agentId?: string
  }

  export type QQMusicAuthResult = {
    
    expireTime: number
    
    openId: string
    
    openToken: string
  }

  export type StockSyncData = {
    
    deviceId: string
    
    syncType: number
    
    begin: boolean
    
    result: boolean
    
    errorCode: number
    
    errorMsg: string
  }

  export type Object = {}

  export type DeviceOfflineFileStatus = {
    
    status: number
    
    sessionId: number
    
    response: OfflineFilesResponse
  }

  export type RecordFinishError = {
    
    deviceId: string
    
    code: number
    
    message?: string
  }

  export type Amplitude = {
    
    deviceId: string
    
    amplitude: number
  }

  export type RecordStatus = {
    
    deviceId: string
    
    state: number
    
    isStarting: boolean
    
    isPausing: boolean
    
    isResuming: boolean
    
    isStoping: boolean
  }

  export type RecordTransferFinishError = {
    
    deviceId: string
    
    code: number
    
    message?: string
  }

  export type RecordTransferAmplitude = {
    
    deviceId: string
    
    amplitude: number
    
    channel: number
  }

  export type RecordTransferStatus = {
    
    deviceId: string
    
    state: number
    
    isStarting: boolean
    
    isPausing: boolean
    
    isResuming: boolean
    
    isStoping: boolean
  }

  export type FileUploadProgress = {
    
    fileId: string
    
    progress: number
  }

  export type RecordTransferRealTimeRecognizeStatus = {
    
    deviceId: string
    
    recordId: string
    
    requestId: string
    
    asrId: number
    
    channel: number
    
    phase: number
    
    status: number
    
    text: string
    
    beginOffset: number
    
    endOffset: number
    
    errorCode: number
    
    errorMessage?: string
  }

  export type LocalSupportAppListResponsed = {
    
    array: number[]
  }

  export type StockIsSync = {
    
    deviceId: string
    
    syncType: number
  }

  export type StockCheckAndCover = {
    
    deviceId: string
    
    stocks: Stock[]
  }

  export type StockAdd = {
    
    deviceId: string
    
    stock: Stock
    
    originalStocks: Stock[]
  }

  export type StockDelete = {
    
    deviceId: string
    
    stock: Stock
    
    originalStocks: Stock[]
  }

  export type StockSort = {
    
    deviceId: string
    
    stocks: Stock[]
  }

  export type HasInstallResultBean = {
    hasInstall?: boolean
  }

  export type FileDigest = {
    
    fileId: number
    
    fileType: number
    
    progress: number
    
    timeStamp: number
    
    fileName: string
    
    fileDuring: number
  }

  export type SoundDetectRequest = {
    
    channel: number
    
    hz: number
    
    db: number
  }

  export type SoundGainsRequest = {
    
    deviceId: string
    
    scene: number[]
    
    result: SoundDetectResult[]
  }

  export type StartRecordRequest = {
    
    deviceId: string
    
    config: StartRecordConfig
  }

  export type SwitchRecordChannelRequest = {
    
    deviceId: string
    
    recordChannel: number
  }

  export type PauseRecordRequest = {
    
    deviceId: string
  }

  export type ResumeRecordRequest = {
    
    deviceId: string
  }

  export type StopRecordRequest = {
    
    deviceId: string
  }

  export type RecordTaskRequest = {
    
    deviceId: string
  }

  export type RecordTaskResult = {
    
    task?: RecordTask
  }

  export type LoadFileRequest = {
    
    deviceId: string
    
    channel: number
    
    sessionId: number
  }

  export type FileCreateParams = {
    
    deviceUniqueId: string
    
    name: string
    
    recordTime: number
    
    duration: number
    
    recordType: number
    
    audioFormat: number
    
    deviceId: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status: number
    
    source: number
  }

  export type FileUpdateParams = {
    
    fileId: number
    
    directoryId?: string
    
    name?: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status?: string
    
    visit?: string
    
    remove?: string
    
    storageKey?: string
    
    transfer?: string
  }

  export type FileTransferParams = {
    
    files: FileTransferItem[]
  }

  export type FileRemoveParams = {
    
    fileId: number
  }

  export type FileListRemoveParams = {
    
    fileIds?: number[]
  }

  export type FilesParams = {
    
    directoryId?: string
    
    recordType?: string
    
    deviceId?: string
    
    remove?: string
    
    transfer?: string
    
    source?: string
    
    orderBy?: string
    
    asc?: string
    
    lastFileId?: number
    
    pageSize?: number
  }

  export type CountFilesParams = {
    
    directoryId?: string
    
    recordType?: string
    
    source?: string
    
    deviceId?: string
    
    remove?: string
  }

  export type CountFilesResult = {
    
    count: number
  }

  export type FileParams = {
    
    fileId: number
    
    ext?: FileParamsExt
  }

  export type DirectoryCreateParams = {
    
    name: string
    
    color?: string
    
    icon?: string
  }

  export type DirectoryUpdateParams = {
    
    directoryId: number
    
    name: string
    
    color?: string
    
    icon?: string
  }

  export type DirectoryRemoveParams = {
    
    directoryId: number
  }

  export type DirectoriesParams = {
    
    orderBy?: string
    
    asc?: string
  }

  export type TransferParams = {
    
    fileId: number
    
    template: string
    
    language: string
  }

  export type StartRecordTransferParams = {
    
    deviceId: string
    
    config: StartRecordTransferConfig
  }

  export type PauseRecordTransferParams = {
    
    deviceId: string
  }

  export type ResumeRecordTransferParams = {
    
    deviceId: string
  }

  export type StopRecordTransferParams = {
    
    deviceId: string
  }

  export type RecordTransferTaskParams = {
    
    deviceId: string
  }

  export type RecordTransferTaskResponse = {
    
    task?: RecordTransferTask
  }

  export type GetRecordTransferRealTimeResultParams = {
    
    fileId?: string
    
    recordId?: string
    
    asrId?: string
  }

  export type GetRecordTransferRealTimeResultResponse = {
    
    list?: RecordTransferRealTimeItem[]
  }

  export type GetRecordTransferTemplateParams = {
    
    deviceId: string
    
    bizType: string
  }

  export type getRecordTransferTemplateResponse = {
    
    result: string
  }

  export type ProcessRecordTransferResultParams = {
    
    recordTransferId: number
    
    template: string
    
    language: string
  }

  export type GetRecordTransferProcessStatusParams = {
    
    deviceId: string
    
    fileIds: string[]
  }

  export type GetRecordTransferProcessStatusResponse = {
    
    success: string[]
    
    fail: string[]
  }

  export type GetRecordTransferRecognizeResultParams = {
    
    recordTransferId: number
    
    from: number
  }

  export type GetRecordTransferRecognizeResultResponse = {
    
    text: string
  }

  export type GetRecordTransferSummaryResultParams = {
    
    recordTransferId: number
    
    from: number
  }

  export type GetRecordTransferSummaryResultResponse = {
    
    text: string
  }

  export type SaveRecordTransferRecognizeResultParams = {
    
    recordTransferId: number
    
    text: string
  }

  export type SaveRecordTransferSummaryResultParams = {
    
    recordTransferId: number
    
    text: string
  }

  export type SaveRecordTransferRealTimeRecognizeResultParams = {
    
    asrId: number
    
    text?: string
    
    asr?: string
    
    translate?: string
  }

  export type GetRecordTransferResultListParams = {
    
    directoryId?: string
    
    recordType?: string
    
    deviceId?: string
    
    remove?: string
    
    transfer?: string
    
    source?: string
    
    orderBy?: string
    
    asc?: string
    
    lastRecordTransferId?: string
    
    pageSize?: number
  }

  export type GetRecordTransferResultDetailParams = {
    
    recordTransferId: number
    
    amplitudeMaxCount?: string
  }

  export type UpdateRecordTransferResultParams = {
    
    recordTransferId: number
    
    directoryId?: string
    
    name?: string
    
    fileName?: string
    
    wavFileName?: string
    
    amplitudes?: string
    
    status?: string
    
    visit?: string
    
    remove?: string
    
    storageKey?: string
    
    transfer?: string
  }

  export type RemoveRecordTransferResultParams = {
    
    recordTransferId: number
  }
}
