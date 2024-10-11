import { useState } from "react";
import Navbar from "../components/Navbar";
import MenuItem from "../components/MenuItem";

import { KEBAB_DATA } from "../data/kebab-data.ts";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-section">
      <div className="navsec">
        <Navbar />
      </div>
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInup">
            <h5 className="section-title ff-secondary text-center ">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInup"
            data-wow-delay="0.1s"
          >
            <div></div>
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  href=""
                  className="d-flex align-items-center text-start mx-3 pb-3"
                >
                  <i className="fa fa-hamburger fa-2x"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="d-flex align-items-center text-start mx-3 pb-3"
                >
                  <i className="fa fa-utensils fa-2x"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        src=""
                        alt=""
                        className="flex-shrink-0 img-fluid rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              منوی غذا
            </h5>
            <h1 className="mb-5">محبوب ترین ها</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
                    activeTab === "tab-1" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab-1")}
                  href="#"
                >
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body"></small>
                    <h6 className="mt-n1 mb-0">کباب ها</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 pb-3 ${
                    activeTab === "tab-2" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab-2")}
                  href="#"
                >
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body"></small>
                    <h6 className="mt-n1 mb-0">خورشت ها</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${
                    activeTab === "tab-3" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab-3")}
                  href="#"
                >
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body"></small>
                    <h6 className="mt-n1 mb-0">نوشیدنی و دسر</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              {/* {tab 1} */}
              {activeTab === "tab-1" && (
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {/* <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src={foodimg}
                          alt=""
                          style={{ width: "80px" }}
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>کیر</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div> */}
                    {KEBAB_DATA.map((kebab) => (
                      <MenuItem
                        name={kebab.name}
                        img={kebab.img}
                        price={kebab.price}
                        description={kebab.description}
                      />
                    ))}
                  </div>
                </div>
              )}
              {/* {Tab 2} */}
              {activeTab === "tab-2" && (
                <div id="tab-2" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-1.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>hichi</span>
                            <span className="text-primary">$۲۰۰۰۰</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-2.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-3.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-4.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-5.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-6.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-7.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-8.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tab-3" && (
                <div id="tab-3" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-1.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-2.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-3.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-4.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-5.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-6.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-7.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img
                          className="flex-shrink-0 img-fluid rounded"
                          src="img/menu-8.jpg"
                          alt=""
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">
                            Ipsum ipsum clita erat amet dolor justo diam
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
