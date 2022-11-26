export const ip = "http://localhost:8080";

// measurement

export const measurementDevicesAddress = ip + "/measurement/devices";
export const measurementDeviceAddress = (deviceId) => ip + "/measurement/devices" + `/${deviceId}`;

// farm

export const farmIdsAddress = ip + "/management/farms";
export const farmAddress = (farmId) => ip + "/management/farms" + `/${farmId}`;
export const devicesModelAddress = ip + "/management/devicesModel";
export const responseOptionsAddress = ip + "/management/responseOptions";

//user

export const userByTokenAddress = (token) => ip + "/api/user/token" + `/${token}`;
export const userAddress = ip + "/api/user"