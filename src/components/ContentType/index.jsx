/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import "./ContentType.css";
import Button from "../Button";

function ContentType({
  collections,
  handleCollections,
  handleAddCollection,
  getAllEntities,
}) {
  return (
    <div className="collection-list">
      <div className="collection-header">
        <div className="type-length">{collections.length} Types</div>
        {/* icon */}
      </div>
      <Button
        onClick={() => {
          handleAddCollection();
        }}
        btnName="+ New Type"
      />
      <div className="collection-list-container">
        {collections.map((collection) => (
          <button
            onClick={() => handleCollections(collection.id)}
            className="collection-list-item"
          >
            <div>{collection.name}</div>
            <div>{getAllEntities.length}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContentType;
