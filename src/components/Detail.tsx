import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import doorDashLogo from "../assets/doordashlogo.png";

import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";

export default function Detail() {
  const [open, setOpen] = useState(true);

  return (
    <div id="detail-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-4 col-sm-6 fedeInup" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div
                  className="p-4"
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  <i className="fa fa-3x fa-check text-success"></i>
                  <h5
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    تضمین کیفیت
                  </h5>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p>
                        تیم ما تضمین می کند که هر محصول بالاترین سطح را دارد
                        استانداردهای کیفیت، جایی برای مصالحه باقی نمی گذارد
                      </p>{" "}
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 fedeInup">
              <div className="service-item rounded pt-3">
                <div
                  className="p-4"
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  <i className="fa fa-3x fa-utensils text-warning"></i>
                  <h5
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    طعم اصیل ایرانی
                  </h5>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p>
                        از غذاهای اصیل ایرانی که با دستور سنتی درست شده اند لذت
                        ببرید
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 fedeInup">
              <div className="service-item rounded pt-3">
                <div
                  className="p-4"
                  style={{ textAlign: "right", direction: "rtl" }}
                >
                  <i className="fa fa-3x fa-cart-plus text-danger"></i>
                  <h5
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    سفارش آنلاین
                  </h5>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p>
                        از راحتی سفارش غذاهای مورد علاقه خود لذت ببرید آنلاین با
                        خدمات سریع و مطمئن
                      </p>
                      <div className="d-flex justify-content-between mt-3">
                        <a
                          href="https://www.ubereats.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success d-flex align-items-center button-hover"
                          style={{ padding: "10px", borderRadius: "5px" }}
                        >
                          <img
                            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png"
                            alt="UberEats Logo"
                            style={{
                              width: "100px",
                              height: "auto",
                              marginRight: "10px",
                            }}
                          />
                        </a>
                        <a
                          href="https://www.doordash.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-danger d-flex align-items-center button-hover"
                          style={{ padding: "10px", borderRadius: "5px" }}
                        >
                          <img
                            src={doorDashLogo}
                            alt="DoorDash Logo"
                            style={{
                              width: "100px",
                              height: "auto",
                              marginRight: "10px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
