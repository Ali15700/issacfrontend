import React from 'react';
import '../home.scss';
import './mid.scss';

import {Chart} from './Chart';

export default function Mid() {
  return (
    <div>

        <div className="container mid-div mb-5">
            <div className="row">
              <div className="col-lg-6 left-mid-div">
                    
                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      <div class="card card-container" style={{width: "10rem"}}>
                              <i class="bi bi-star-fill  star-icon"></i>
                              <div class="card-body">
                                  <h5 class="card-title">Avg Rating</h5>
                                  <p class="card-text">7869</p>
    
                              </div>
                      </div>

                      

              </div>
              <div className="col-lg-6 right-mid-div">
                  <Chart/>
              </div>
            </div>
          </div>

    </div>
  )
}
