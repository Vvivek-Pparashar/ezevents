import React from "react";
import ct2 from "../../assets/cat-2.jpg";
import ct3 from "../../assets/cat-3.jpg";
import ct4 from "../../assets/cat-4.jpg";
import ct1 from "../../assets/cat-1.jpg";
import ct5 from "../../assets/cat-5.jpg";
import ct6 from "../../assets/cat-6.jpg";

const Categories = () => {
  const style = {
    padding: "30px",
  };
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct1} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct2} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct3} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct4} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct5} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Bags</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 pb-1">
          <div
            className="cat-item d-flex flex-column border mb-4"
            style={style}
          >
            <p className="text-right">15 Products</p>
            <a
              href=""
              className="cat-img position-relative overflow-hidden mb-3"
            >
              <img className="img-fluid" src={ct6} alt="" />
            </a>
            <h5 className="font-weight-semi-bold m-0">Shoes</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
