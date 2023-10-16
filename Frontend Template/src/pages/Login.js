import React, { useRef } from "react";
import useApi from "../assets/hooks/useApi";
import useCommon from "../assets/hooks/useCommon";
import { useNavigate } from "react-router-dom";

const Login = () => {
  /**dependency injection */
  const api = useApi();
  const navigate = useNavigate();
  /** for fields */
  const emailRef = useRef();
  const passwordRef = useRef();
  const common = useCommon();

  /**handle login */

  const handleLogin = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const body = { email: email, password: password };
    const response = await api.login(body);
    if (response && response.data && response.data.success === true) {
      common.tryLogin(response);
      navigate('/dashboard')
    } else if (response === null) {
      console.log("response not found");
    }
  };

  return (
    <div className="h-screen flex bg-gray-100 justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-center text-2xl">Ecovani Inventory Login</h1>
          <p className="text-center text-sm">Best Inventory Management</p>
          <div className="divider"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              ref={passwordRef}
            />
            <label className="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button onClick={() => handleLogin()} class="btn btn-primary">
              Login
            </button>
          </div>
          <div class="divider">OR</div>
          <button className="btn btn-glass hover:btn-accent">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
