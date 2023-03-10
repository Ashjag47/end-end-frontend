/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SideNav } from "../../components";
import ContentType from "../../components/ContentType";
import FieldArea from "../../components/FieldArea";
import {
  GET_COLLECTIONS,
  GET_ENTRIES_FIELDS,
  DELETE_FIELD,
  ADD_COLLECTION,
  ADD_ENTITY_FIELD,
  EDIT_ENTRIES_FIELDS,
  GET_ENTRIES,
} from "../../constants/apiEndpoints";
import makeRequest from "../../utils/makeRequest";
import Modal from "../../components/modal";
import "./Content.css";

function Content() {
  const [collections, setCollections] = useState([]);
  const [seletedCollection, setSeletedCollection] = useState({});
  const [Fields, setFields] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(seletedCollection, Fields);
  console.log(token);
  const navigate = useNavigate();
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
  }, [Fields]);

  const handleCollections = (id) => {
    const collection = collections.find((collection) => collection.id === id);
    setSeletedCollection(collection);
    makeRequest(
      GET_ENTRIES_FIELDS(id),
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
  };

  const handleFieldsDelete = (id, data) => {
    makeRequest(
      DELETE_FIELD(id),
      navigate,
      {
        data: {
          field: data,
        },
      },
      token
    ).then((response) => {
      const field = response;
      setFields(field);
    });
    window.location.reload(false);
  };

  const addField = (id, name) => {
    makeRequest(
      ADD_ENTITY_FIELD(id),
      navigate,
      {
        data: {
          [name]: null,
        },
      },
      token
    ).then((response) => {
      const collection = response;
      setCollections(collection);
    });
    window.location.reload(false);
  };

  const editField = (id, old, newkey) => {
    makeRequest(
      EDIT_ENTRIES_FIELDS(id),
      navigate,
      {
        data: {
          old,
          newkey,
        },
      },
      token
    ).then((response) => {
      const collection = response;
      setCollections(collection);
    });
    window.location.reload(false);
  };

  const addCollection = (name) => {
    makeRequest(
      ADD_COLLECTION,
      navigate,
      {
        data: {
          name,
        },
      },
      token
    ).then((response) => {
      const collection = response;
      setCollections(collection);
    });
    window.location.reload(false);
  };

  const getAllEntities = (id) => {
    makeRequest(
      GET_ENTRIES(id),
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
  };

  const modalStatus = "content type";

  return collections && Fields ? (
    <div className="content-page">
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
      <Modal
        title={`Add new ${modalStatus} collection`}
        onClose={() => setShow(false)}
        show={show}
      >
        <input
          type="text"
          placeholder={`Enter ${modalStatus}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            modalStatus === "content type"
              ? addCollection(name)
              : addField(contentid, name);
          }}
        >
          Add
        </button>
      </Modal>

      <SideNav collections={collections} />
      <div className="content-body">
        <div className="content-header">Content Types</div>
        <div className="content-container">
          <div className="content-list">
            <ContentType
              collections={collections}
              handleCollections={handleCollections}
              getAllEntities={getAllEntities}
              handleAddCollection={() => {
                setShow(true);
              }}
            />
          </div>
          <div className="field">
            <FieldArea
              collections={seletedCollection}
              fields={Fields}
              handleFieldsDelete={handleFieldsDelete}
              addField={addField}
              editField={editField}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Content;
