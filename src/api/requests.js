import {ConnectivityError, RequestError} from "../errors/common";

const TIMEOUT_MS = 30000;

export function get(
    address,
    {headers = {}, timeout = TIMEOUT_MS} = {}
) {
  return _get(address, {headers, timeout});
}

export function post(
    address,
    {
      headers = {},
      params = {},
      timeout = TIMEOUT_MS,
    } = {}
) {
  return _withBody('POST')(address, {headers, params, timeout});
}

export function put(
    address,
    {
      headers = {},
      params = {},
      timeout = TIMEOUT_MS,
    } = {}
) {
  return _withBody('PUT')(address, {headers, params, timeout});
}

export function patch(
    address,
    {
      headers = {},
      params = {},
      timeout = TIMEOUT_MS,
    } = {}
) {
  return _withBody('PATCH')(address, {headers, params, timeout});
}

export function _delete(
    address,
    {headers = {}, params = {}, timeout = TIMEOUT_MS} = {}
) {
  return _del(address, {headers, params, timeout});
}

const _get = (address, {headers, timeout}) =>
    Promise.resolve(
        timeoutFetch(
            address,
            {
              method: 'GET',
              headers: {
                ...jsonHeaders(),
                ...headers,
              },
            },
            timeout
        )
    );

const _withBody = (method) => (address, {headers, params, timeout}) =>
    Promise.resolve(
        timeoutFetch(
            address,
            {
              method: method,
              headers: {
                ...jsonHeaders(),
                ...headers,
              },
              body: JSON.stringify(params),
            },
            timeout
        )
    )

const _del = (address, {headers = {}, params = {}, timeout} = {}) =>
    Promise.resolve(
        timeoutFetch(
            address,
            {
              method: 'DELETE',
              headers: {
                ...jsonHeaders(),
                ...headers,
              },
              body: JSON.stringify(params),
            },
            timeout
        )
    )

const timeoutFetch = (url, options, timeout) => {
  // 0 means no timeout
  if (!timeout) {
    return fetch(url, options);
  }

  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new ConnectivityError('Timed out')), timeout);
    fetch(url, options)
    .then(resolve)
    .catch(reject)
    .finally(() => {
      clearTimeout(t);
    });
  });
};

export function jsonHeaders() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

export function checkStatus(status, expectedStatus, body = {}) {
  if (status !== expectedStatus) {
    throw new RequestError(status, body);
  }
}
