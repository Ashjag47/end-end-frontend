export const BACKEND_URL = "http://localhost:3001/";
export const AUTH_URL = "http://localhost:4000/";

export const LOGIN = {
  url: `${AUTH_URL}auth/login`,
  method: "post",
};

export const RIGISTER = {
  url: `${AUTH_URL}users`,
  method: "post",
};

export const GET_COLLECTIONS = {
  url: `${BACKEND_URL}content`,
  method: "get",
};

export const GET_ENTRIES = (contentId) => {
  return { url: `${BACKEND_URL}content/${contentId}/entities`, method: "get" };
};

export const GET_ENTRIES_FIELDS = (contentId) => {
  return { url: `${BACKEND_URL}content/${contentId}/fields`, method: "get" };
};

export const DELETE_FIELD = (contentId) => {
  return {
    url: `${BACKEND_URL}content/${contentId}/entities`,
    method: "delete",
  };
};

export const ADD_ENTITY_FIELD = (contentId) => {
  return { url: `${BACKEND_URL}content/${contentId}/entities`, method: "put" };
};

export const ADD_COLLECTION = {
  url: `${BACKEND_URL}content`,
  method: "post",
};

export const EDIT_ENTRIES_FIELDS = (contentId) => {
  return { url: `${BACKEND_URL}content/${contentId}/fields`, method: "put" };
};
