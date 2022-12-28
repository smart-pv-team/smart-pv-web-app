export const ip = "https://smart-pv.herokuapp.com";

// measurement

export const measurementDevicesAddress = ip + "/measurement/devices";
export const measurementDeviceAddress = (deviceId) => ip + "/measurement/devices" + `/${deviceId}`;

// consumption

export const consumptionDevicesAddress = ip + "/consumption/devices";
export const consumptionDeviceAddress = (deviceId) => ip + "/consumption/devices" + `/${deviceId}`;
export const consumptionDeviceParametersPowerConsumptionAddress = (deviceId) => ip + "/consumption/devices/"
    + `${deviceId}` + "/parameters/powerConsumption";
export const consumptionDeviceParametersPriorityAddress = (deviceId) => ip + "/consumption/devices/" + `${deviceId}`
    + "/parameters/priority";

// management

export const farmsAddress = ip + "/management/farms";
export const farmMeasurementDevicesAddress = (farmId) => ip + "/management/farms" + `/${farmId}`
    + "/measurement/devices";
export const farmConsumptionDevicesAddress = (farmId) => ip + "/management/farms" + `/${farmId}`
    + "/consumption/devices";
export const farmAddress = (farmId) => ip + "/management/farms" + `/${farmId}`;
export const devicesModelAddress = ip + "/management/devicesModel";
export const responseOptionsAddress = ip + "/management/responseOptions";
export const farmRunningAddress = (farmId) => ip + "/management/farms/" + `${farmId}` + "/parameters/running";
export const farmAlgorithmAddress = (farmId) => ip + "/management/farms/" + `${farmId}` + "/parameters/algorithm";
export const intervalsAddress = ip + "/management/algorithm/interval";
export const intervalAddress = (intervalId) => ip + "/management/algorithm/interval/" + `${intervalId}`;
export const rulesAddress = ip + "/management/algorithm/rule";
export const ruleAddress = (ruleId) => ip + "/management/algorithm/rule/" + `${ruleId}`;
export const farmIntervalsAddress = (farmId) => ip + "/api/user/farm/" + `${farmId}` + "/algorithm/interval";
export const intervalRulesAddress = (intervalId) => ip + "/management/algorithm/interval/" + `${intervalId}` + "/rule";

// role

export const userAddress = ip + "/api/user"
export const adminAddress = ip + "/api/admin"
export const userByTokenAddress = (token) => ip + "/api/user/token" + `/${token}`;
export const adminByTokenAddress = (token) => ip + "/api/admin/token" + `/${token}`;
export const adminByTokenFarmAddress = (token) => ip + "/api/admin/token" + `/${token}` + "/farm";
export const adminUsersAddress = (token) => ip + "/api/admin/token" + `/${token}` + "/pupils";
