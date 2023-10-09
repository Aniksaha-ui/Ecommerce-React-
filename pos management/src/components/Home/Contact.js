import React from "react";

const Contact = () => {
  return (
    <>
      <h3 class="text-3xl mt-20">Suggestion Or Contact</h3>
      <div class="hero mt-20">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contact Us</h1>
            <p class="py-6">
              If you need anything support you can mail or call the following
              mail or number
            </p>
            <p>Mobile Number : +948595999</p>
            <p>Mobile Number : sahaanik1045@gmail.com</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-title">
              <h3 className="text-center px-24">
                &nbsp;&nbsp; Need to improve
              </h3>
            </div>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Information</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered w-96"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Suggestion</span>
                </label>
                <textarea
                  type="text"
                  cols="30"
                  rows="5"
                  placeholder="Your Suggestion"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
