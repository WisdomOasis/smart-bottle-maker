
declare namespace ty.sweeper {
  
  export function sweeperSegmentMap(params: {
    
    mapData: string
    
    width: number
    
    height: number
    
    sweeper: string
    
    barrier: string
    
    unknown: string
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

  
  export function sweeperHouseFrame(params: {
    
    mapData: string
    
    width: number
    
    height: number
    
    sweeper: string
    
    barrier: string
    
    unknown: string
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
}
