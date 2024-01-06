import React from "react";
import Picon from "../assets/p.png";
import shap from "../assets/shap.png";
import "./DashboardHeader.css";
function DashboardHeader() {
  return (
    <>
      <div className="d-flex">
        <div
          className="item shadow col-3"
          style={{
            mask: `url(${shap}) center`,
            width: "313px",
          }}
        >
          <img
            src={Picon}
            alt=""
            srcset=""
            style={{ width: "70px", height: "70px" }}
            className="ms-5"
          />
        </div>
        <div className="col-9 itemTwo">
          <div className="d-flex justify-content-end mt-4">
            <span
              style={{ backgroundColor: "white" }}
              className="p-2 shadow rounded"
            >
              <img
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcset=""
                style={{
                  width: "35px",
                  height: "35px",
                }}
                className="rounded-circle"
              />
              <b className="ms-1">XYZ Enterprises Pvt.Ltd</b>
            </span>

            <span
              className="p-3 shadow rounded ms-2"
              style={{ backgroundColor: "white" }}
            >
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
