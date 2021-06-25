import React from "react";

const TracerPage = () => (
  <div class="wrapper">
    <div class="page-header">
      <div class="page-header-image"></div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div id="square7" class="square square-7"></div>
            <div id="square8" class="square square-8"></div>
            <div class="card card-register">
              <h4 class="card-title">Register</h4>
              <div class="card-body">
                <form class="form">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-single-02"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-email-85"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-email-85"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Contact Details"
                      class="form-control"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-email-85"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Workplafe (if appliable)"
                      class="form-control"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-email-85"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Current Home Address"
                      class="form-control"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-email-85"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="City/Town"
                      class="form-control"
                    />
                  </div>

                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="tim-icons icon-lock-circle"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Country"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Degree Trained In
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <h4 class="mb-5 mt-3">Year Obtained</h4>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="datepicker-container">
                        <div class="form-group">
                          <input
                            type="text"
                            id="datepicker"
                            class="form-control datepicker"
                            value="10/05/2016"
                            data-datepicker-color="primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      What are you doing for a living?
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <p class="category">
                    Do you think ICT is relevant in this day and age?
                  </p>
                  <div class="form-check form-check-radio">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <span class="form-check-sign"></span>
                      Radio is off
                    </label>
                  </div>
                  <div class="form-check form-check-radio">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option2"
                        checked
                      />
                      <span class="form-check-sign"></span>
                      Radio is on
                    </label>
                  </div>

                  <div class="form-check text-left">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" />
                      <span class="form-check-sign"></span>I agree to the
                      <a href="javascript:void(0)">terms and conditions</a>
                    </label>
                  </div>
                 
                  
                </form>
              </div>
              <div class="card-footer">
                <a
                  href="javascript:void(0)"
                  class="btn btn-info btn-round btn-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="register-bg"></div>
        <div id="square1" class="square square-1"></div>
        <div id="square2" class="square square-2"></div>
        <div id="square3" class="square square-3"></div>
        <div id="square4" class="square square-4"></div>
        <div id="square5" class="square square-5"></div>
        <div id="square6" class="square square-6"></div>
      </div>
    </div>
  </div>
);

export default TracerPage;
