
declare namespace ty.outdoor {
  
  export function currentDevice(params?: {
    complete?: () => void
    success?: (params: {
      
      deviceID: string
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
}
