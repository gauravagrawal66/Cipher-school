import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Home.css';
import dp from '../Image/dp.png'

function Home(props) {
  return (
      <>
        {/* <div className="pf-user-back">
          <div className="pf-user-content">
            <div className="pf-user-profile-box">
              <div className="profile-pic-div">
                    <img src={dp} id="photo"/>
                    <input type="file" id="file"/>
              </div>
            </div>
            <div className="pf-user-details">
              <div className="pf-user-detail-box">
                <div id="pf-user-side">
                  <h2 className="pf-user-greeting">Hello,</h2>
                  <h1 className="pf-user-name">{props.name ? `Welcome - ${props.name}` : "Login please"}</h1>
                </div>
                    <div className="lsmain">
                      <h1>
                      <Link to="/login" className="ls">Login</Link>
                      <Link to="/signup" className="ls">Signup</Link>
                    </h1> 
                  </div>
              </div>
            </div>
          </div>
        </div> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <a class="navbar-brand">Cipher School</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
            </span>
          </button>
          <div class="collapse navbar-collapse w-100 order-3 dual-collapse2" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ml-auto">
              <Link to="/login" className="ls">Login</Link>
              </li>
              <li class="nav-item ml-auto">
              <Link to="/signup" className="ls">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="aboutme">
          <h3 className="abt">About Me :</h3>
         <div className="textarea" id="textt"></div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Edit
          </button>
          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">About Me</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <div className="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal">
          <h3 className="abt">Personal Information:</h3>
          <div className="personal-details">
            <form className="formpersonal">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="First name" className="plable">First Name</label>
                  <input type="text" className="form-control" placeholder="First name"required/>
                </div>
                <div className="col-6">
                  <label htmlFor="Last name" className="plable" >Last Name</label>
                  <input type="text" className="form-control " placeholder="Last name"required/>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="Github" className="plable">GitHub</label>
                  <input type="text" className="form-control" placeholder="github account link..." required/>
                </div>
                <div className="col-6">
                  <label htmlFor="Coding" className="plable">Coding Profile</label>
                  <input type="text" className="form-control " placeholder="Coding Profile link..." required/>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="Address" className="plable">Address</label>
                  <input type="text" className="form-control" placeholder="Address..."required/>
                </div>
                <div className="col-6">
                  <label htmlFor="Last name" className="plable">State</label>
                  <input type="text" className="form-control " placeholder="State"/>
                </div>
              </div>
            </form>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
        

    </>
    
  );
}

export default Home;
