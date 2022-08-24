import React, { useState } from "react";
import Logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const MemberApplication = () => {
  const [c_pass, setCpass] = useState();
  const [password, setPass] = useState();
  const [email, setEmail] = useState();
  const [redirect, setRedirect] = useState();

  const checkUppercase = (str) => {
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) == str.charAt(i).toUpperCase() &&
        str.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  };

  const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };
  const submit = async (e) => {
    e.preventDefault();
    if (
      (checkUppercase(password) == false) |
      (c_pass != password) |
      (password.length <= 7)
    ) {
      alert(
        "Ensure the passwords greater than 8 characters,equal and contain an uppercase letter."
      );
    }

    ValidateEmail(email);
    let applyUrl = "https://9dae-102-219-208-46.in.ngrok.io/api/auth/register/";
    await fetch(applyUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length == 1) {
          alert("Error.");
        } else if (Object.keys(data).length == 3) {
          alert("Operation Successful,please check your email inbox!");
          localStorage.setItem("authTokens", JSON.stringify(data));
          setTimeout(
            (window.location.href = "http://localhost:3000/login"),
            2000
          );
        }
      })
      .catch((error) => {
        alert(error);
      });

    const inputs = document.querySelectorAll("#email,#password", "#c_password");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div style={{ backgroundColor: `#f5f5f5` }}>
      <section className="vh-140">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <div className="logo_wraper">
                      <h4 className="header">Aeronotical Society of Kenya</h4>
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
                      <form onSubmit={submit}>
                        <h5
                          className="fw-normal mb-3 pb-3 header"
                          style={{ letterSpacing: 1 }}
                        >
                          Become an AeSK Member!
                        </h5>
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email Address
                          </label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            onChange={(e) => setPass(e.target.value)}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Password
                          </label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="c_password"
                            className="form-control form-control-lg"
                            onChange={(e) => setCpass(e.target.value)}
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <h6
                          className="fw-normal mb-3 pb-2"
                          style={{ letterSpacing: 1 }}
                        ></h6>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Apply
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Already a Member?
                          <Link to="/login">Login</Link>
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
    </div>
  );
};
