import {_delete, get, patch, put} from "./requests";
import {
  adminAddress,
  adminByTokenAddress,
  adminByTokenFarmAddress,
  adminUsersAddress,
  userAddress,
  userByTokenAddress
} from "./routes";

export async function putUser(user) {
  return put(userAddress, {params: user})
}

export async function putAdmin(admin) {
  return put(adminAddress, {params: admin})
}

export async function getAdminByToken(adminId) {
  return get(adminByTokenAddress(adminId))
}

export async function patchAdminByToken(adminId) {
  return patch(adminByTokenFarmAddress(adminId))
}

export async function getUserByToken(userId) {
  return get(userByTokenAddress(userId))
}

export async function getAdminUsers(adminId) {
  return get(adminUsersAddress(adminId))
}

export async function _deleteUser(userId) {
  return _delete(userByTokenAddress(userId))
}