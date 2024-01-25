import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome</h1>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-12">
            <div className="card">
              <h1>2002</h1>
              <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-12">
            <div className="card">
              <h1>2010</h1>
              <p>
              Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-12">
            <div className="card">
              <h1>2018</h1>
              <p>
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="imge">
        <img
          src="https://preview.colorlib.com/theme/pulse/img/sign.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Welcome;
