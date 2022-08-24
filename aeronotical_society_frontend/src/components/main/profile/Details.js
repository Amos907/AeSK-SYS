import React, { useState, useEffect } from "react";
import { Header } from "../header-footer/Header";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../../features/profile/detailsSlice";

export const Details = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [mid, setMid] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState();
  const [dob, setDOB] = useState();

  const { details } = useSelector((state) => state.detailsReducer);
  console.log(details);
  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(phone);
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);
  return (
    <div>
      <Header header="My Profile" subheader="Details" />
      <div className="row">
        <div className="col-md-6">
          <form>
            <h5
              className="fw-normal mb-3 pb-3 header"
              style={{ letterSpacing: 1 }}
            >
              About Me!
            </h5>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                First Name
              </label>
              <input
                type="text"
                id="first"
                className="form-control form-control-lg w-75"
                onChange={(e) => setFirst(e.target.value)}
              />
            </div>

            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Middle Name
              </label>
              <input
                type="text"
                id="middle"
                className="form-control form-control-lg w-75"
                onChange={(e) => setMid(e.target.value)}
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Last Name
              </label>
              <input
                type="text"
                id="last"
                className="form-control form-control-lg w-75"
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Date Of Birth
              </label>

              <input
                id="dob"
                className="form-control w-75"
                type="date"
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
              />
            </div>
            <h6
              className="fw-normal mb-3 pb-2"
              style={{ letterSpacing: 1 }}
            ></h6>
          </form>
        </div>
        <div className="col-md-6">
          <form>
            <h5
              className="fw-normal mb-3 pb-3 header"
              style={{ letterSpacing: 1 }}
            >
              My Contact Details!
            </h5>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Phone Number
              </label>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg w-75"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Alternative Phone Number
              </label>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg w-75"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Email
              </label>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg w-75"
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <div className="form-outline mb-2">
              <label className="form-label" htmlFor="form2Example17">
                Alternative Email Address
              </label>
              <input
                type="email"
                id="form2Example17"
                className="form-control form-control-lg w-75"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <h6
              className="fw-normal mb-3 pb-2"
              style={{ letterSpacing: 1 }}
            ></h6>
          </form>
        </div>
        <div className="pt-1 mb-4">
          <button className="btn btn-dark btn-lg btn-block">Save</button>
        </div>
      </div>
    </div>
  );
};
