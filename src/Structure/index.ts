const BASE_URL = process.env.REACT_APP_BASE_URL;

type FetchAsyncProps = {
  url: string;
  method?: string;
  body?: {};
  httpHeaders?: {};
};

export const fetchAsync = async ({
  url,
  method = "get",
  body,
  httpHeaders,
}: FetchAsyncProps) => {
  const baseUrl = `${BASE_URL}${url}`;
  const baseHttpHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(baseUrl, {
    method,
    headers: {
      ...baseHttpHeaders,
      ...httpHeaders,
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export const loginAsync = async ({
  url,
  method = "post",
  body,
  httpHeaders,
}: FetchAsyncProps) => {
  const baseUrl = `${BASE_URL}${url}`;
  const baseHttpHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(baseUrl, {
    method,
    headers: {
      ...baseHttpHeaders,
      ...httpHeaders,
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};

export const RegisterAysnc = async ({
  url,
  method = "post",
  body,
  httpHeaders,
}: FetchAsyncProps) => {
  const baseUrl = `${BASE_URL}${url}`;
  const baseHttpHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(baseUrl, {
    method,
    headers: {
      ...baseHttpHeaders,
      ...httpHeaders,
    },
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
