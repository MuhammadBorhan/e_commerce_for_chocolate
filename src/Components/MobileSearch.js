import React from "react";
import { FaSearch } from "react-icons/fa";

const MobileSearch = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "85px" }}
    >
      {/* search bar */}
      <div className="d-block d-lg-none">
        <div className="position-relative">
          <input
            className="form-control ps-5"
            type="search"
            placeholder="Search For Gifts"
            aria-label="Search"
            style={{ width: "300px" }}
          />
          <FaSearch className="position-absolute top-50 start-0 ms-3 translate-middle-y" />
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
