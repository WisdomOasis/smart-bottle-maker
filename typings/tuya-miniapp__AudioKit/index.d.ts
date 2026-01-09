
declare namespace ty.audio {
  
  export function setup(params?: {
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

  
  export function detect(params: {
    
    channel: number
    
    hz: number
    
    db: number
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

  
  export function stopDetect(params?: {
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

  
  export function publishGains(params: {
    
    deviceId: string
    
    scene: number[]
    
    result: SoundDetectResult[]
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

  
  export function onPublishGainsProgress(
    listener: (params: Object) => void
  ): void

  
  export function offPublishGainsProgress(
    listener: (params: Object) => void
  ): void

  export type SoundDetectResult = {
    
    channel: number
    
    hz: number
    
    db: number
  }

  export type Object = {}
}
