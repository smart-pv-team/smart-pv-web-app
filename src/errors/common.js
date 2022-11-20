export class RequestError extends Error {
  constructor(statusCode, body) {
    super(`Status: ${statusCode}`);
    this.statusCode = statusCode;
    this.body = body;
  }
}

export const CONNECTIVITY_ERROR_TYPES = {
  // The device has Wi-Fi or mobile data turned off
  CONNECTIVITY_OFF: 'CONNECTIVITY_OFF',
  // Fetch failed due to network error. This may mean anything,
  // unfortunately fetch doesn't provide more information
  FETCH_FAILED: 'FETCH_FAILED',
};

export class ConnectivityError extends Error {
  constructor(type) {
    super('Connectivity error');
    this.type = type;
  }
}
