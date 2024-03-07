import React from "react";
import sn1 from "../../assets/carousel-1.jpg";
import sn2 from "../../assets/carousel-2.jpg";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <Link
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            // to="#navbar-vertical"
            style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </Link>
          <nav
            className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: "410px" }}
            >
              <div className="nav-item dropdown">
                <Link className="nav-link" data-toggle="dropdown">
                  Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                </Link>
                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                  <Link className="dropdown-item">Men's Dresses</Link>
                  <Link className="dropdown-item">Women's Dresses</Link>
                  <Link className="dropdown-item">Baby's Dresses</Link>
                </div>
              </div>
              <Link className="nav-item nav-link">Shirts</Link>
              <Link className="nav-item nav-link">Jeans</Link>
              <Link className="nav-item nav-link">Swimwear</Link>
              <Link className="nav-item nav-link">Sleepwear</Link>
              <Link className="nav-item nav-link">Sportswear</Link>
              <Link className="nav-item nav-link">Jumpsuits</Link>
              <Link className="nav-item nav-link">Blazers</Link>
              <Link className="nav-item nav-link">Jackets</Link>
              <Link className="nav-item nav-link">Shoes</Link>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  EZ
                </span>
                EVENTS
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to={'/Home'} className="nav-item nav-link">
                  Home
                </Link>
                <Link to={"/About"} className="nav-item nav-link">
                  About
                </Link>
                <Link to={'/'} className="nav-item nav-link">
                  Services
                </Link>
                {/* <div className="nav-item dropdown">
                  <Link
                    
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link href="cart.html" className="dropdown-item">
                      Shopping Cart
                    </Link>
                    <Link href="checkout.html" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div> */}
                <Link to={'/ContactUs'} className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <Link className="nav-item nav-link">Login</Link>
                <Link className="nav-item nav-link">Register</Link>
              </div>
            </div>
          </nav>
          <div
            id="header-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "410px" }}>
                <img className="img-fluid" src={sn1} alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Fashionable Dress
                    </h3>
                    <Link className="btn btn-light py-2 px-3">Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "410px" }}>
                <img className="img-fluid" src={sn2} alt="Image" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h4 className="text-light text-uppercase font-weight-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                      Reasonable Price
                    </h3>
                    <Link className="btn btn-light py-2 px-3">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="carousel-control-prev"
              href="#header-carousel"
              data-slide="prev"
            >
              <div
                className="btn btn-dark"
                style={{ width: "45px", height: "45px" }}
              >
                <span className="carousel-control-prev-icon mb-n2"></span>
              </div>
            </Link>
            <Link
              className="carousel-control-next"
              href="#header-carousel"
              data-slide="next"
            >
              <div
                className="btn btn-dark"
                style={{ width: "45px", height: "45px" }}
              >
                <span className="carousel-control-next-icon mb-n2"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
