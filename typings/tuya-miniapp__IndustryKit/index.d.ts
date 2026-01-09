
declare namespace ty.industry {
  
  export function apiRequestBySdf(params: {
    
    path: string
    
    method?: HTTPMethod
    
    body?: Record<string, any>
    
    params?: Record<string, any>
    
    headers?: Record<string, any>
    complete?: () => void
    success?: (params: {
      
      body?: string
      
      headers?: Record<string, any>
      
      statusCode: number
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

  
  export function shiftCurrentSpace(params: {
    
    assetId: string
    
    deviceId: string
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

  
  export function openMicroApp(params: {
    
    universalId: string
    
    path?: string
    
    query?: Record<string, any>
    complete?: () => void
    success?: (params: {
      
      body?: string
      
      headers?: Record<string, any>
      
      statusCode: number
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

  
  export function getTicket(params?: {
    complete?: () => void
    success?: (params: {
      
      expire: number
      
      ticket: string
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

  export enum HTTPMethod {
    
    DELETE = "DELETE",

    
    GET = "GET",

    
    PATCH = "PATCH",

    
    POST = "POST",

    
    PUT = "PUT",
  }
}
