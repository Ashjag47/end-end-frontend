/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LOGIN_ROUTE,
  RIGISTER_ROUTE,
  ERROR_ROUTE,
  CONTENT_ROUTE,
  ENTRIES_ROUTE,
} from "./constants/router";

import {
  Content,
  Entries,
  Error,
  PageNotFound,
  Login,
  Rigister,
} from "./pages";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={RIGISTER_ROUTE} element={<Rigister />} />
          <Route path={CONTENT_ROUTE} element={<Content />} />
          <Route
            path={`${ENTRIES_ROUTE}/:collectionId`}
            element={<Entries />}
          />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
