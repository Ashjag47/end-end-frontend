/* eslint-disable react/button-has-type */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from "react";
import "./EntityTab.css";

function EntityTab({ entry }) {
  console.log(entry);
  const entr = entry?.entityFields;
  return (
    <div className="entity-tab">
      <span className="entity-tab-id"> {entry.id}</span>
      <span className="entity-tab-field">
        {Object.keys(entr)?.map((entityField) => {
          console.log(entityField);
          return <span>{entr[entityField]}</span>;
        })}
      </span>
      <span className="entity-edit-delete">
        <span>edit</span>
        <span>del</span>
      </span>
    </div>
  );
}

export default EntityTab;
