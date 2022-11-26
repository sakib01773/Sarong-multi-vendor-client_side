import React from 'react'

const ProductCustomize4 = () => {
  return (
    <>
    
  
    {/* <!-- Responsve -->

    <!-- The sidebar for Mobile Phones --> */}
    <div
      className="offcanvas offcanvas-start"
      style={{ width: "270px" }}
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">

          Welcome Guest
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body p-0">
  
        <div className="border-bottom p-2 mx-4 d-flex justify-content-evenly">
          <a href="" className="text-decoration-none">Login</a>/<a href=" " className="text-decoration-none"
            >Sign up</a
          >
        </div>

        <ul className="navbar-nav p-4">
          <p className="text-uppercase fw-bold text-muted text-light border-bottom m-0">Menu</p>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Man</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Accessories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Customise products</a>
          </li>
        </ul>
        <ul className="navbar-nav bg-light p-4">
          <p className="text-uppercase fw-bold text-muted text-light border-bottom m-0">Profile</p>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Profile</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Women</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Accessories</a>
          </li>
          <li className="nav-item col">
            <a className="nav-link" aria-current="page" href="#">Customise products</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- section part --> */}

    {/* <div className="container">
      <div className="customize-wrapper">
        <div className="nav-progress">
          <ul className="progressbar">
            <li className="completed">Pick Color</li>
            <li className="completed">Size</li>
            <li className="completed">Design</li>
            <li className="active">Preview</li>
          </ul>
        </div>
        <div className="section-body"></div>
        <div className="section-footer">
          <a href="product-customize2.html" type="button" className="next-btn button">Next</a>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default ProductCustomize4;