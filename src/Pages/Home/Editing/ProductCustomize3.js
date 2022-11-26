import React from 'react'
import { Link } from 'react-router-dom';
import { fabric } from 'fabric'

const ProductCustomize3 = () => {

  
  
  function loadCanvasImage(url) {
    var imgObj = new Image();
    imgObj.src = url;
    imgObj.onload = function () {
      var image = new fabric.Image(imgObj);
      image.set({
        angle: 0,
        borderDashArray: [7, 6],
        borderColor: '#b3b2b1',
        cornerColor: '#ffffff',
        transparentCorners: false,
        cornerSize: 10,
      });
      image.scaleToWidth(100);
      canvas.centerObject(image);
      canvas.setActiveObject(image);
      canvas.add(image);
    };
  }
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var imgObj = new Image();
        imgObj.src = e.target.result;
        imgObj.onload = function () {
          var image = new fabric.Image(imgObj);
          image.set({
            angle: 0,
            borderDashArray: [7, 6],
            borderColor: '#b3b2b1',
            cornerColor: '#ffffff',
            transparentCorners: false,
            cornerSize: 10,
          });
          image.scaleToWidth(150);
          canvas.centerObject(image);
          canvas.setActiveObject(image);
          canvas.add(image);
        };
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  var canvas = new fabric.Canvas('drawItem');
  canvas.setWidth(230);
  canvas.setHeight(230);

  var img = document.createElement('img');
  img.src = 'assets/img/cross_icon.png';

  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.6,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24,
  });
  function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
  }
  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
    ctx.restore();
  }

  
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

    <div className="container p-3">
      <div className="customize-wrapper">
        <div className="nav-progress">
          <ul className="progressbar">
            <li className="completed">Pick Color</li>
            <li className="completed">Size</li>
            <li className="active">Design</li>
            <li className=" ">Preview</li>
          </ul>
        </div>
        <div className="section-body" style={{ overflow: "hidden" }}>
          <div className="wrap">
            <div className="main-tab d-flex justify-content-between">
              <button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#textCanvas"
                aria-controls="textCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/tab-font--1629301087.png"
                  alt="Add Text"
                />
                <p>Add Text</p></button
              ><button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#uploadCanvas"
                aria-controls="uploadCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/Camera-1631084161.png"
                  alt="Upload"
                />
                <p>Upload</p></button
              ><button
                className="tab-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#galaryCanvas"
                aria-controls="galaryCanvas"
              >
                <img
                  height="27"
                  src="https://images.bewakoof.com/web/Gallery-1631084095.png"
                  alt="Gallery"
                />
                <p>Gallery</p>
              </button>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center cvp"
            style={{ position: "fixed", left: "0", right: "0", minHeight: "587px" }}
          >
            <div>
              <div className="canvas-wrap" id="capture">
                <div
                  id="final-img"
                  className="d-flex"
                  style={{ width: "480px", height: "480px", position: "relative" }}
                >
                  <button className="flip-btn z-99" onclick="capture()">
                    <img
                      src="https://images.bewakoof.com/web/flipImage-1629802868.png"
                      alt="flip image"
                    />Flip
                  </button>
                  <img
                    id="timg"
                    width="100%"
                    height="100%"
                    alt=""
                    src="https://images.bewakoof.com/web/white-front-v2-1646400293.jpg"
                  />
                  <div className="z-99" style={{ position: "absolute", top: "103px", left: "127px" }}>
                    <canvas
                      id="drawItem"
                      className="lower-canvas"
                      width="270"
                      height="303.75"
                      style={{
                        border: "1px dashed rgb(151, 151, 151)",
                        position: "absolute",
                        width: "216px",
                        height: "243px",
                        left: "0px",
                        top: "0px",
                        touchAction: "none",
                        userSelect: "none"
                        }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <script>
          // function capture() {
          //   html2canvas(document.querySelector('.canvas-wrap')).then(function (canvas) {
          //     // document.body.appendChild(canvas);
          //     return Canvas2Image.saveAsPNG(canvas);
          //   });
          // }
        </script> */}
        <div className="section-footer" id="canvasTab">
          <Link to="/productCustomize4" type="button" className="next-btn button">Next</Link>
          {/* <!-- Image offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="uploadCanvas"
            aria-labelledby="uploadCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 className="" id="uploadCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <label className="upld-wrap d-flex align-items-center">
                <input
                  className="d-none formInput"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/heic"
                />
                <img
                  width="35"
                  height="35"
                  src="https://images.bewakoof.com/web/tab-image-upload-1629301087.png"
                  alt="image upload"
                />
                <div className="ms-3 mt-1 text">
                  <p className="head m-0">Upload an image to place it on t-shirt</p>
                  <p className="desc m-0">Max. size should be 10 MB</p>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- Text offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="textCanvas"
            aria-labelledby="textCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 className="" id="textCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <label className="upld-wrap d-flex align-items-center">
                <input
                  className="d-none formInput"
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, image/heic"
                />
                <img
                  width="35"
                  height="35"
                  src="https://images.bewakoof.com/web/tab-image-upload-1629301087.png"
                  alt="image upload"
                />
                <div className="ms-3 mt-1 text">
                  <p className="head m-0">Upload an image to place it on t-shirt</p>
                  <p className="desc m-0">Max. size should be 10 MB</p>
                </div>
              </label>
            </div>
          </div>
          {/* <!-- Galary offcanvas --> */}
          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="galaryCanvas"
            aria-labelledby="galaryCanvasLabel"
            style={{}}
          >
            <div className="offcanvas-header">
              <h5 id="galaryCanvasLabel"></h5>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small bg-white shadow-sm">
              <div className="container-fluid">
                <p className="headingGalary">Pick from These Trendy Images</p>
                <div className="row">
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        // onclick="loadCanvasImage(this.src)" 
                        onClick={() => loadCanvasImage(this.src)}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/sports.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/msd/MSD-Forever_back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/virat.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  <div className="col-4 p-1">
                    <div className="galary-canvas-col p-2">
                      <img
                        src="https://images.bewakoof.com/images/pcgallery/Don't-Look-Back.png"
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        onclick="loadCanvasImage(this.src)"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

    
  )

  
}



export default ProductCustomize3;