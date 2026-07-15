export default {
  switch: "switch",
  childLock: "child_lock",
  workMode: "work_mode",
  workingStatus: "working_status",
  milkboxSensor: "milkbox_sensor",
  funnelSensor: "funnel_sensor",
  bottleSensor: "bottle_sensor",
  watertankSensor: "watertank_sensor",
  tempSet: "temp",
  unitSet: "unit_set",
  volumeMl: "ml",
  volumeOz: "oz",
  formulaWater: "formula_water",
  formulaRatio: "formula_ratio",
  formulaDensity: "formula_density",
  remindFunnelClean: "remind_funnel_clean",
  drinkRecordUpload: "drink_record_upload",
  errorCode: "error_code",
  sceneFeedRequest: "scene_feed_request",
} as const;

export type DpCode = (typeof dpCodes)[keyof typeof dpCodes];
