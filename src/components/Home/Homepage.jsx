import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pic from "./hell.png";
const Homepage = () => {
  const [value,setValue]=useState();
  const navigate=useNavigate();
  const handleJoin=useCallback(()=>{
    navigate(`/room/${value}`)
  },[navigate,value])
  const cardStyle = {
    borderRadius: '1rem',
  
  };

  const imageStyle = {
    borderRadius: '1rem 0 0 1rem',
  };

  const logoStyle = {
    color: '#ff6219',
  };

  const formLabelStyle = {
    letterSpacing: '1px',
  };



  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={cardStyle}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={imageStyle}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div  className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={logoStyle}></i>
                          <span className="h1 fw-bold mb-0"><img src={pic} alt="i"/></span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={formLabelStyle}>
                          Join Echo Verse
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                          value={value}
                          onChange={(e)=>setValue(e.target.value)}
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="form2Example17">
                           Room ID
                          </label>
                        </div>

                    

                        <div className="pt-1 mb-4">
                          <button onClick={handleJoin} className="btn btn-dark btn-lg btn-block" type="button" >
                           Join
                          </button>
                        </div>

                        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
