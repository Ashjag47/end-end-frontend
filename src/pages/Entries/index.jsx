/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/named */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  GET_ENTRIES,
  GET_ENTRIES_FIELDS,
  GET_COLLECTIONS,
} from "../../constants/apiEndpoints";
import makeRequest from "../../utils/makeRequest";
import { EntityTab, SideNav } from "../../components";
import "./Entries.css";

function Entries() {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const [Entries, setEntries] = useState([]);
  const [Fields, setFields] = useState([]);
  const [collections, setCollections] = useState([]);
  console.log(Entries, Fields, collections);
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    makeRequest(
      GET_COLLECTIONS,
      navigate,
      {
        data: {
          token,
        },
      },
      token
    ).then((response) => {
      const collection = response;
      setCollections(collection);
    });
    makeRequest(
      GET_ENTRIES(collectionId),
      navigate,
      {
        data: {
          token,
        },
      },
      token
    ).then((response) => {
      const Entry = response;
      setEntries(Entry);
    });
    makeRequest(
      GET_ENTRIES_FIELDS(collectionId),
      navigate,
      {
        data: {
          token,
        },
      },
      token
    ).then((response) => {
      const field = response;
      setFields(field);
    });
  }, []);

  return Entries && Fields ? (
    <div className="entity-page">
      <div className="side-nav">
        <SideNav collections={collections} />
      </div>
      <div className="entries-full">
        <div className="entries-header">
          <span className="entries-count">13 Entries Found</span>
          <span className="add-entries">Add a new entry</span>
        </div>
        <div className="entities-col-name">
          <div className="entities-id">ID</div>
          {Fields.map((field) => {
            return <div className="entities-field">{field}</div>;
          })}
          <div className="entities-action">Actions</div>
        </div>
        <div className="entities-table">
          {Entries.map((entry) => {
            return <EntityTab entry={entry} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entries;
