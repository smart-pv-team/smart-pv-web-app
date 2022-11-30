export const ip = "http://localhost:8080";

// measurement

export const measurementDevicesAddress = ip + "/measurement/devices";
export const measurementDeviceAddress = (deviceId) => ip + "/measurement/devices" + `/${deviceId}`;

// consumption

export const consumptionDevicesAddress = ip + "/consumption/devices";
export const consumptionDeviceAddress = (deviceId) => ip + "/consumption/devices" + `/${deviceId}`;

// management

export const farmIdsAddress = ip + "/management/farms";
export const farmAddress = (farmId) => ip + "/management/farms" + `/${farmId}`;
export const devicesModelAddress = ip + "/management/devicesModel";
export const responseOptionsAddress = ip + "/management/responseOptions";

// role

export const userAddress = ip + "/api/user"
export const adminAddress = ip + "/api/admin"
export const userByTokenAddress = (token) => ip + "/api/user/token" + `/${token}`;
export const adminByTokenAddress = (token) => ip + "/api/admin/token" + `/${token}`;
export const adminUsersAddress = (token) => ip + "/api/admin/token" + `/${token}` + "/pupils";
