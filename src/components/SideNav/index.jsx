/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from "react";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";
import { CONTENT_ROUTE, ENTRIES_ROUTE } from "../../constants/router";

function SideNav({ collections }) {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-head">CMS+</div>
      <div className="collection-type">
        <div className="collection-type-head">COLLECTION TYPES</div>
        <ul className="list">
          {collections.map((collection) => (
            <li>
              <div
                className="collection-type-name"
                key={collection.id}
                onClick={() => {
                  navigate(`${ENTRIES_ROUTE}/${collection.id}`);
                }}
              >
                {collection.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="content-builder">
        <div
          className="content-builder-head"
          onClick={() => {
            navigate(CONTENT_ROUTE);
          }}
        >
          CONTENT TYPE BUILDER
        </div>
      </div>
    </div>
  );
}

export default SideNav;
