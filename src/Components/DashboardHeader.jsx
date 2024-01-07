import React, { useState } from "react";
import Picon from "../assets/p.png";
import shap from "../assets/shap.png";
import profile from "../assets/Profile.png";
import "./DashboardHeader.css";
function DashboardHeader() {
  const [show, setShow] = useState("mobileMenu");

  const handleBars = (classnames) => {
    setShow(classnames);
  };

  return (
    <>
      <div className="d-flex">
        <div
          className="item shadow col-3 LogoSectionMain"
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
        {/* midRange */}
        <div className="item shadow col-1 LogoSection rounded-circle mt-5 ms-3 me-3">
          <img src={Picon} alt="" srcset="" className="img-fluid" />
        </div>

        <div className="col-9 itemTwo logosectionSec">
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

      {/* mobile Size */}
      <div className="mobileNavbar">
        <div className="col-12 bg-white d-flex py-3 shadow">
          <div>
            <img
              src={Picon}
              alt=""
              srcset=""
              style={{ width: "50px", height: "50px" }}
              className="ms-5"
            />
          </div>
          <div className="ms-auto">
            <span
              style={{ backgroundColor: "white" }}
              className="p-2 shadow rounded"
            >
              <img
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                srcset=""
                style={{
                  width: "20px",
                  height: "20px",
                }}
                className="rounded-circle"
              />
              <b className="ms-1" style={{ fontSize: "10px" }}>
                XYZ Enterprises Pvt.Ltd
              </b>
            </span>

            <span
              className="p-2 shadow rounded ms-2"
              style={{ backgroundColor: "white" }}
            >
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "10px" }}
              ></i>
            </span>
          </div>
          <div>
            <button
              className="btn text-primary"
              onClick={() => handleBars("mobileMenuNew")}
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* menus */}
      <div className={`${show}`}>
        <div className="col-12 bg-white position-absolute top-0">
          <div className="shadow py-3 ">
            <div className="d-flex justify-content-end">
              <button className="btn" onClick={() => handleBars("mobileMenu")}>
                {" "}
                <i className="fa-solid fa-xmark fw-bold text-primary"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={profile}
                alt=""
                className="my-3"
                style={{ width: "90px", height: "90px" }}
              />
            </div>

            <div>
              <h5 className="text-center">
                Ram Mohan{" "}
                <i className="fa-solid fa-angle-right text-primary"></i>
              </h5>
            </div>
            <div className="text-center" style={{ fontSize: "10px" }}>
              ramMohan2@gmail.com
            </div>
          </div>
          <div>
            <div>
              <div>
                <button
                  href="#"
                  className="fw-bold w-100 buttonLinksTwo py-2 ps-4 pe-4 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-solid fa-table-columns text-primary m-2 "></i>
                  DasBoard
                </button>
              </div>
              <div>
                <button
                  href="#"
                  className="fw-bold buttonLinksTwo w-100 py-2 ps-3 pe-5 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-brands fa-pagelines text-primary m-2 "></i>
                  Perks
                </button>
              </div>
              <div>
                <button
                  href="#"
                  className="fw-bold buttonLinksTwo w-100 py-2 px-3 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-solid fa-puzzle-piece text-primary m-2 "></i>
                  Addons
                </button>
              </div>
              <div>
                <button
                  href="#"
                  className="fw-bold buttonLinksTwo w-100 py-2 ps-3 pe-5 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-solid fa-comments text-primary m-2 "></i>
                  FAQ
                </button>
              </div>
              <div>
                <button
                  href="#"
                  className="fw-bold buttonLinksTwo w-100 py-2 ps-3 pe-3 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-solid fa-chalkboard-user text-primary m-2 "></i>
                  Support
                </button>
              </div>
              <div>
                <button
                  href="#"
                  className="fw-bold buttonLinksTwo w-100 py-2 ps-3 pe-3 text-decoration-none text-dark "
                >
                  {" "}
                  <i className="fa-solid fa-power-off text-danger m-2 "></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
