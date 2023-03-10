/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import Button from "../Button";
import Field from "../Field";
import "./FieldArea.css";
import Modal from "../modal";

function FieldArea({
  collections,
  fields,
  handleFieldsDelete,
  addField,
  editField,
}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  return (
    collections && (
      <div className="content-field-body">
        <Modal
          title="Add new field for collection"
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
              addField(collections.id, name);
            }}
          >
            Add
          </button>
        </Modal>
        <div>
          <div className="content-field-header">
            <div className="header-txt">
              <span>{collections.name}</span>
              <button className="btn-edit">{/* icon */}</button>
            </div>
            <div className="field-length">{fields.length} Fields</div>
          </div>
          <Button
            onClick={() => {
              setShow(true);
            }}
            btnName="Add another field"
          />
          <div className="content-field-list">
            {fields.map((field) => (
              <Field
                id={collections.id}
                field={field}
                // handleFieldUpdate={handleFieldUpdate}
                handleFieldsDelete={handleFieldsDelete}
                editField={editField}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default FieldArea;
