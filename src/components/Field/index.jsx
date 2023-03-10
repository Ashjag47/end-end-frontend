/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Field.css";
import Modal from "../modal";

function Field({ id, field, handleFieldsDelete, editField }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  return (
    <div className="fields-item">
      <Modal
        title="Edit this field for collections"
        onClose={() => setShow(false)}
        show={show}
      >
        <input
          type="text"
          placeholder="Enter new field name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            editField(id, field, name);
          }}
        >
          Add
        </button>
      </Modal>
      <div className="field-img">Aa</div>
      <div className="item-field-body">
        <div className="item-field-header">
          <span>{field}</span>
        </div>
        <div className="field-type">string</div>
        <div className="curd-actions">
          <button
            className="btn-edit"
            onClick={() => {
              setShow(true);
            }}
          >
            <i className="fa-regular fa-pen-to-square" />
          </button>
          <button
            className="btn-delete"
            onClick={() => handleFieldsDelete(id, field)}
          >
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Field;
