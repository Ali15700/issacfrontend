import React from 'react'
import './topbar.scss';

function Topbar() {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        
        <a
          class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          href="#"
          >Basket
          </a>
        
          
        <div class="collapse navbar-collapse" id="topNavBar">
          <form class="d-flex ms-auto my-3 my-lg-0">
                <i class="bi bi-search "></i>
          </form>
          
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        class="rounded-circle"
                        style={{ width: "25px" , height: "25px"}}
                        />       
               
        
        </div>
      </div>
      </nav>
    </div>
  )
}
export default Topbar;