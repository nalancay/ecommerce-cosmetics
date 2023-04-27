const isSuccessful = (statusCode) => statusCode >= 200 && statusCode < 400;

const makeRequest = async ({ URL_ENDPOINT }) => {
  const response = await fetch(URL_ENDPOINT);
  const code = response.status;
  const parsedResponse = response.json();
  return {
    data: parsedResponse,
    status: code,
    isSuccessful: isSuccessful(code),
  };
};

export { makeRequest };
