
declare namespace ty.health {
  
  export function getHealthConnectStatus(params?: {
    complete?: () => void
    success?: (params: number) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function getHealthConnectStatusSync(): number

  
  export function insertRecords(params: {
    
    request: string
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

  
  export function insertRecordsSync(request?: RecordParams): boolean

  
  export function authStatuPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authStatuPermissionsSync(paramModel?: ParamModel): null

  
  export function getSaveQuanlityPermission(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function getSaveQuanlityPermissionSync(paramModel?: ParamModel): null

  
  export function authQuanlityWritePermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authQuanlityWritePermissionsSync(
    paramModel?: ParamModel
  ): null

  
  export function authCategoryWritePermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authCategoryWritePermissionsSync(
    paramModel?: ParamModel
  ): null

  
  export function authQuanlityReadPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authQuanlityReadPermissionsSync(paramModel?: ParamModel): null

  
  export function authCategoryReadPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authCategoryReadPermissionsSync(paramModel?: ParamModel): null

  
  export function authCharacteristicReadPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authCharacteristicReadPermissionsSync(
    paramModel?: ParamModel
  ): null

  
  export function authQuanlityRWPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authQuanlityRWPermissionsSync(paramModel?: ParamModel): null

  
  export function authCategoryRWPermissions(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function authCategoryRWPermissionsSync(paramModel?: ParamModel): null

  
  export function saveQuanlityData(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function saveQuanlityDataSync(paramModel?: ParamModel): null

  
  export function saveQuanlityNoTimeWithData(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function saveQuanlityNoTimeWithDataSync(paramModel?: ParamModel): null

  
  export function saveBloodPressureData(params: {
    
    systolic: number
    
    diastolic: number
    
    startTime: number
    
    endTime: number
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

  
  export function saveBloodPressureDataSync(
    paramModel?: BloodPressureParams
  ): null

  
  export function readQuanlityDataWithType(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function readQuanlityDataWithTypeSync(paramModel?: ParamModel): null

  
  export function deleteQuanlityDataType(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function deleteQuanlityDataTypeSync(paramModel?: ParamModel): null

  
  export function readCharacteristicDataWithType(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function readCharacteristicDataWithTypeSync(
    paramModel?: ParamModel
  ): null

  
  export function saveCategorylityData(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function saveCategorylityDataSync(paramModel?: ParamModel): null

  
  export function saveCategoryNoTimeWithData(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function saveCategoryNoTimeWithDataSync(paramModel?: ParamModel): null

  
  export function readCategoryDataWithType(params?: {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
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

  
  export function readCategoryDataWithTypeSync(paramModel?: ParamModel): null

  export type RecordParams = {
    
    request: string
  }

  export type ParamModel = {
    
    permissions?: string[]
    
    readPermissions?: string[]
    
    writePermissions?: string[]
    
    writePermission?: number
    
    value?: number
    
    unitType?: string
    
    startTime?: number
    
    endTime?: number
    
    type?: number
  }

  export type BloodPressureParams = {
    
    systolic: number
    
    diastolic: number
    
    startTime: number
    
    endTime: number
  }
}
