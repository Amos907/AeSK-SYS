import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

export const MemberLogin = () => {
  const [aesk, setAesk] = useState();
  const [redirect, setRedirect] = useState();
  const [password, setPassword] = useState();
  const submit = async (e) => {
    e.preventDefault();
    // let loginUrl = "https://api.sys.aesk.thomasmwaura.com/api/auth/login/";
    let loginUrl = "http://127.0.0.1:8000/api/auth/login/";
    await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: aesk,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length == 1) {
          alert("Invalid Membership code or password.");
        } else if (Object.keys(data).length == 3) {
          alert("Operation Successful!");
          localStorage.setItem("authTokens", JSON.stringify(data));
          setTimeout((window.location.href = "http://localhost:3000/"), 2000);
        }
      })
      .catch((error) => {
        alert(error);
      });

    const inputs = document.querySelectorAll("#aesk_code,#password");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <div className="logo_wraper">
                    <h5 className="header">Aeronotical Society of Kenya</h5>
                    <img
                      src={Logo}
                      alt="login form"
                      className="img-fluid mt-auto"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form id="form" onSubmit={submit}>
                      <h5
                        className="fw-normal mb-3 pb-3 header"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your AeSK Member Account
                      </h5>
                      <h6
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Provide your AeSK Member Code
                      </h6>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="aesk_code"
                          className="form-control form-control-lg"
                          placeholder="AeSK Code"
                          onChange={(e) => setAesk(e.target.value)}
                          required
                        />
                      </div>
                      <h6
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Provide your Password
                      </h6>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="AeSK Code"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot code?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "393f81" }}>
                        Not a Member?
                        <Link to="/register">Sign In</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
