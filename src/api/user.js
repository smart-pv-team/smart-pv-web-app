import {get, put} from "./requests";
import {userAddress, userByTokenAddress} from "./routes";

export async function getUserByToken(token) {
  return get(userByTokenAddress(token))
}

export async function putUser(user) {
  return put(userAddress, {params: user})
}