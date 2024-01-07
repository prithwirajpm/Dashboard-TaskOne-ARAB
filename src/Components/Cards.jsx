import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="d-flex">
      <div className="w-100 bg-white rounded shadow ms-5 pb-2 mt-3">
        <div className="pt-3 d-flex justify-content-between">
          <h3 className="ps-5">Choose a Plane that's Just like for You !</h3>
          <div className="d-flex">
            <div className="bellsTop">
              <i className="fa-solid fa-bell text-primary border p-3 bg-white rounded-circle shadow m-2"></i>
            </div>
            <div className="bellsTop">
              <i className="fa-solid fa-plus text-primary border p-3 bg-white rounded-circle shadow m-2"></i>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mx-3">
          <span className="rounded border py-1">
            <a href="#" className="alinkClass pb-1 pt-2 px-3 rounded shadow">
              Monthly
            </a>
            <a href="#" className="alinkClass pb-1 pt-2 px-3 rounded">
              Annualy<sup style={{ color: "lightgreen" }}>-10%</sup>
            </a>
          </span>
        </div>
        <div className="items d-flex justify-content-evenly flex-wrap">
          <div className="itemOne col-12 col-lg-3 py-2 px-3 border rounded shadow m-3">
            <div>
              <h4 className="mb-0">Basic</h4>
              <div>
                <h6
                  className="mb-0"
                  style={{ position: "relative", padding: "5px" }}
                >
                  $678/mo
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      content: "''",
                      borderBottom: "2px solid red",
                      width: "80px",
                    }}
                  ></span>
                </h6>
              </div>
              <h5>$678/mo</h5>
            </div>
            <div>
              <button className="btn btn-primary" style={{ fontSize: "12px" }}>
                Get Start<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <hr />
            <div>what is your's get : </div>
            <div style={{ fontSize: "10px" }} className="fw-bold">
              <div>
                <i className="fa-regular fa-user mt-2 me-3"></i>Up to 25 users
              </div>
              <div>
                <i className="fa-solid fa-cloud-arrow-up mt-2 me-3"></i>Up to
                25gb Storage
              </div>
              <div>
                <i className="fa-solid fa-envelope mt-2 me-3"></i>Email Support
              </div>
            </div>
            <div className="ms-5 mt-3">
              <a href="#" className="text-black fw-bold">
                Explore Features
              </a>
            </div>
          </div>
          <div className="itemOne col-12 col-lg-3 py-3 px-3 border rounded shadow m-3">
            <div>
              <h4 className="mb-0">Standard</h4>
              <div>
                <h6
                  className="mb-0"
                  style={{ position: "relative", padding: "5px" }}
                >
                  $678/mo
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      content: "''",
                      borderBottom: "2px solid red",
                      width: "80px",
                    }}
                  ></span>
                </h6>
              </div>
              <h5>$678/mo</h5>
            </div>
            <div>
              <button className="btn btn-primary" style={{ fontSize: "12px" }}>
                Get Start<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <hr />
            <div>what is your's get : </div>
            <div style={{ fontSize: "10px" }} className="fw-bold">
              <div>
                <i className="fa-regular fa-user mt-2 me-3"></i>Up to 25 users
              </div>
              <div>
                <i className="fa-solid fa-cloud-arrow-up mt-2 me-3"></i>Up to
                25gb Storage
              </div>
              <div>
                <i className="fa-solid fa-envelope mt-2 me-3"></i>Email Support
              </div>
            </div>
            <div className="ms-5 mt-2">
              <a href="#" className="text-black fw-bold">
                Explore Features
              </a>
            </div>
          </div>
          <div className="itemOne col-12 col-lg-3 py-3 px-3 border rounded shadow m-3">
            <div>
              <h4 className="mb-0">Premium</h4>
              <div>
                <h6
                  className="mb-0"
                  style={{ position: "relative", padding: "5px" }}
                >
                  $678/mo
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      content: "''",
                      borderBottom: "2px solid red",
                      width: "80px",
                    }}
                  ></span>
                </h6>
              </div>
              <h5>$678/mo</h5>
            </div>
            <div>
              <button className="btn btn-primary" style={{ fontSize: "12px" }}>
                Get Start<i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
            </div>
            <hr />
            <div>what is your's get : </div>
            <div style={{ fontSize: "10px" }} className="fw-bold">
              <div>
                <i className="fa-regular fa-user mt-2 me-3"></i>Up to 25 users
              </div>
              <div>
                <i className="fa-solid fa-cloud-arrow-up mt-2 me-3"></i>Up to
                25gb Storage
              </div>
              <div>
                <i className="fa-solid fa-envelope mt-2 me-3"></i>Email Support
              </div>
            </div>
            <div className="ms-5 mt-2">
              <a href="#" className="text-black fw-bold">
                Explore Features
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-evenly py-2 flex-wrap">
          <div className="col-12 col-lg-5 border d-flex py-2 px-2 rounded shadow">
            <div className="col-6 fw-bold" style={{ fontSize: "10px" }}>
              <div>
                <span
                  className="rounded px-1 text-white"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  free Starter
                </span>
                <h5>Free Strater</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span
                  className="rounded px-2 py-1 text-white"
                  style={{ fontSize: "10px", backgroundColor: "lightgreen" }}
                >
                  Get Start<i className="fa-solid fa-arrow-right ms-2"></i>
                </span>
              </div>
            </div>
            <div className="col-6 fw-bolder" style={{ fontSize: "10px" }}>
              <div>
                <span>what your get : </span>
                <div>
                  <i className="fa-regular fa-user mt-3 me-3"></i>Up to 25 users
                </div>
                <div>
                  <i className="fa-solid fa-cloud-arrow-up mt-3 me-3"></i>Up to
                  25gb Storage
                </div>
                <div>
                  <i className="fa-solid fa-envelope mt-3 me-3"></i>Email
                  Support
                </div>
                <div>
                  {" "}
                  <i className="fa-solid fa-check-double mt-3 me-3"></i>Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Similique
                  laboriosam a consectetur beatae nobis
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 border d-flex py-2 px-2 rounded shadow">
            <div className="col-6 fw-bold" style={{ fontSize: "10px" }}>
              <div>
                <span
                  className="rounded px-1 text-white"
                  style={{ backgroundColor: "lightblue" }}
                >
                  free Starter
                </span>
                <h5>Enter Prise Plane </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span
                  className="rounded px-2 py-1 text-white"
                  style={{ fontSize: "10px", backgroundColor: "lightblue" }}
                >
                  Contact Us<i className="fa-solid fa-arrow-right ms-2"></i>
                </span>
              </div>
            </div>
            <div className="col-6 fw-bolder" style={{ fontSize: "10px" }}>
              <div>
                <span>what your get : </span>
                <div>
                  <i className="fa-regular fa-user mt-3 me-3"></i>Up to 25 users
                </div>
                <div>
                  {" "}
                  <i className="fa-solid fa-check-double mt-3 me-3"></i>Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between">
        <div className="ms-5 mt-5 bells">
          <i className="fa-solid fa-bell text-primary border p-3 bg-white rounded shadow"></i>
        </div>
        <div className="ms-5 mt-5 bells">
          <i className="fa-solid fa-plus text-primary border p-3 bg-white rounded-circle shadow"></i>
        </div>
      </div>
    </div>
  );
}

export default Cards;
