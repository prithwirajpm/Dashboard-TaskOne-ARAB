import React from "react";
import "../Components/SLideBarDashBoard.css";
import profile from "../assets/Profile.png";
import Cards from "./Cards";

function SLideBarDashBoard() {
  return (
    <div className="d-flex">
      <aside
        style={{
          width: "192px",
          height: "89vh",
        }}
        className="shadow largeSlidebar"
      >
        <div style={{ height: "100%", backgroundColor: "white" }}>
          <div className="shadow py-3">
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
            <div className="mt-4">
              <button
                href="#"
                className="fw-bold buttonLinksTwo py-1 ps-4 pe-4 text-decoration-none rounded-end text-dark "
              >
                {" "}
                <i className="fa-solid fa-table-columns text-primary m-2 "></i>
                DasBoard
              </button>
            </div>
            <div className="mt-4">
              <button
                href="#"
                className="fw-bold buttonLinksTwo py-1 ps-3 pe-5 text-decoration-none rounded-end text-dark "
              >
                {" "}
                <i className="fa-brands fa-pagelines text-primary m-2 "></i>
                Perks
              </button>
            </div>
            <div className="mt-4">
              <button
                href="#"
                className="fw-bold buttonLinksTwo py-1 px-3 text-decoration-none rounded-end text-dark "
              >
                {" "}
                <i className="fa-solid fa-puzzle-piece text-primary m-2 "></i>
                Addons
              </button>
            </div>
            <div className="mt-4">
              <button
                href="#"
                className="fw-bold buttonLinksTwo py-1 ps-3 pe-5 text-decoration-none rounded-end text-dark "
              >
                {" "}
                <i className="fa-solid fa-comments text-primary m-2 "></i>
                FAQ
              </button>
            </div>
            <div className="mt-4">
              <button
                href="#"
                className="fw-bold buttonLinksTwo py-1 ps-3 pe-3 text-decoration-none rounded-end text-dark "
              >
                {" "}
                <i className="fa-solid fa-chalkboard-user text-primary m-2 "></i>
                Support
              </button>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-end"
            style={{ height: "18%" }}
          >
            <div className=" fw-bold text-primary">
              <a href="#" className="text-decoration-none">
                {" "}
                Log Out <i class="fa-solid fa-power-off "></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
      <aside className="col-1 bg-white shadow smallSidebar mt-5 ms-3 me-3 rounded">
        <div className="w-100">
          <div className="d-flex justify-content-center">
            <img
              src={profile}
              alt=""
              className="my-3 img-fluid"
              style={{ width: "60px", height: "60px" }}
            />
          </div>

          <div>
            <div className="d-flex justify-content-center m-4">
              <button className="rounded-circle shadow buttonLinkSmallTwo">
                <i className="fa-solid fa-table-columns text-primary m-2"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center m-4">
              <button className="rounded-circle shadow buttonLinkSmallTwo">
                <i className="fa-brands fa-pagelines text-primary m-2 px-1"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center m-4">
              <button className="rounded-circle shadow buttonLinkSmallTwo">
                <i className="fa-solid fa-puzzle-piece text-primary m-2 "></i>
              </button>
            </div>
            <div className="d-flex justify-content-center m-4">
              <button className="rounded-circle shadow buttonLinkSmallTwo">
                <i className="fa-solid fa-comments text-primary m-2 "></i>
              </button>
            </div>
            <div className="d-flex justify-content-center m-4">
              <button className="rounded-circle shadow buttonLinkSmallTwo">
                <i className="fa-solid fa-chalkboard-user text-primary m-2 "></i>
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-end">
          <div className="d-flex justify-content-center m-4">
            <button className="rounded-circle shadow buttonLinkSmallTwo">
              <i className="fa-solid fa-power-off text-primary m-2 "></i>
            </button>
          </div>
        </div>
      </aside>
      <div>
        {" "}
        <Cards />
      </div>
    </div>
  );
}

export default SLideBarDashBoard;
