/* eslint-disable import/extensions */
/* eslint-disable default-param-last */
import axios from "axios";
// import { BACKEND_URL, AUTH_URL } from "../../constants/apiEndpoints";
import { ERROR_ROUTE } from "../../constants/router";
import { AUTH_URL } from "../../constants/apiEndpoints";

const makeRequest = async (
  apiEndPoint,
  navigate,
  dynamicConfig = {},
  token
) => {
  try {
    const requestDetails = {
      baseURL: AUTH_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig,
      headers: {
        authorization: token,
      },
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    const errorStatus = e.response?.status;
    if (errorStatus) {
      navigate(`${ERROR_ROUTE}/${errorStatus}`);
    } else {
      navigate(ERROR_ROUTE);
    }
    return null;
  }
};

export default makeRequest;
