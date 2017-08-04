const DATA_URL = '/data.json';

export const fetchUserData = () => fetch(DATA_URL).then(handleResponse);

function handleResponse(response) {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    }
    const error = Object.assign({}, json, {
      status: response.status,
      statusText: response.statusText
    });
    return Promise.reject(error);
  });
}
