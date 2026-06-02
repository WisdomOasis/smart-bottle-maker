
declare namespace ty.media {
  export type ManagerContext = {
    
    managerId: number
  }

  
  interface GetRGBAudioManagerTask {
    
    startRGBRecord(params: {
      complete?: () => void
      success?: (params: null) => void
      failure?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
    }): void

    
    stopRGBRecord(params: {
      complete?: () => void
      success?: (params: null) => void
      failure?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
    }): void

    
    onAudioRgbChange(
      listener: (params: {
        
        managerId: number
        
        body: string
      }) => void
    ): void
  }
  export function getRGBAudioManager(params: {
    complete?: () => void
    success?: (params: null) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): GetRGBAudioManagerTask
}
