import {_delete, get, patch} from "./requests";
import {
  farmIntervalsAddress,
  intervalAddress,
  intervalRulesAddress,
  intervalsAddress,
  ruleAddress,
  rulesAddress
} from "./routes";

export async function patchInterval(interval) {
  return patch(intervalsAddress, {params: interval})
}

export async function patchRule(rule) {
  return patch(rulesAddress, {params: rule})
}

export async function _deleteInterval(intervalId) {
  return _delete(intervalAddress(intervalId))
}

export async function _deleteRule(ruleId) {
  return _delete(ruleAddress(ruleId))
}

export async function getIntervalRules(intervalId) {
  return get(intervalRulesAddress(intervalId))
}

export async function getFarmIntervals(farmId) {
  return get(farmIntervalsAddress(farmId))
}