export const ip = "http://localhost:8080";

// measurement

export const measurementDevicesIdsAddress = ip + "/measurement/devices";
export const measurementDeviceAddress = (deviceId) => ip + "/measurement/devices" + `/${deviceId}`;

// farm

export const farmIdsAddress = ip + "/management/farms";
export const farmAddress = (farmId) => ip + "/management/farms" + `/${farmId}`;
export const devicesModelAddress = ip + "/management/devicesModel";