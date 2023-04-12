import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import career from "../Image/career.png";
// {result}
export const Result = () => {
  const [result, setResult] = useState(sessionStorage.getItem("result"));
  

  const [login, setLogin] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [data2, setData2] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  //   const [error, setError] = useState("");

  const handleChange2 = ({ currentTarget: input }) => {
    setData2({ ...data2, [input.name]: input.value });
  };

  const handleSubmit2 = async (e) => {
    // sessionStorage.removeItem("token");
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const res = await axios.post(url, data2);
      const data3 = res.data;
      console.log(data3);

      sessionStorage.setItem("token", res.data.email);
      window.location.reload(false);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, data);
      sessionStorage.setItem("token", res.data.email);
      window.location.reload(false);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      {!sessionStorage.getItem("token") ? ( login ? ( <div className="main">
      <div className="nav2">
        <div className="nav2--upper" style={{ color: "#FFFCF2" }}>
          {/* <a
            href="/result"
            // onClick={() => {setLogin(true)}}
            style={{
              color: "#FFFCF2" ,
            }}
          >
            Sign-in
          </a>{" "} */}
          &nbsp; &nbsp;
          <a
            
            onClick={() => setLogin(false)}
            style={{
              color:  "#FFFCF2" ,
            }}
          >
            Sign-up
          </a>
        </div>
      </div>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <h1 className="name" style={{ marginTop: "150px" }}>
            Sign-in
          </h1>
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              className="si"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={data.email}
            />
          </fieldset>
          <br />
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              className="si"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </fieldset>

          {error && <div>{error}</div>}
          <button className="signin-button">Sign-in</button>
        </form>
      </div>
    </div>)
    :
    (  <div className="main">
          <div className="nav2">
            <div className="nav2--upper">
              <a
                
                onClick={() => setLogin(true)}
                style={{
                  color: "#ACA8A2",
                }}
              >
                Sign-in
              </a>{" "}
              &nbsp; &nbsp;
              {/* <a
                href="/result"
                // onClick={() => {setLogin(false)}}
                style={{
                  color: "#ACA8A2",
                }}
              >
                Sign-up
              </a> */}
            </div>
          </div>

          <div className="content">
            <form onSubmit={handleSubmit2}>
              <div className="email">
                <h1 className="name">Sign-up</h1>

                <fieldset>
                  <legend>Email</legend>
                  <input
                    type="email"
                    className="s"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange2}
                    value={data2.email}
                    required
                  />
                </fieldset>

                <fieldset>
                  <legend>Password</legend>
                  <input
                    type="password"
                    className="s"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleChange2}
                    value={data2.password}
                    required
                  />
                </fieldset>

                <div style={{ width: "283px" }}>
                  <fieldset>
                    <legend>Name</legend>
                    <input
                      type="text"
                      className="s"
                      placeholder="Enter First name"
                      name="firstName"
                      onChange={handleChange2}
                      value={data2.firstName}
                      required
                    />
                  </fieldset>
                </div>

                <fieldset>
                  <legend>Surname</legend>
                  <input
                    type="text"
                    className="s"
                    placeholder="Enter Last name"
                    name="lastName"
                    onChange={handleChange2}
                    value={data2.lastName}
                    required
                  />
                </fieldset>

                {/*  <fieldset>
                    <legend>DOB</legend>
                    <input
                        type="date"
                        className="s"
                        name="dob"
                        value={data.dob}
                        onChange={handleChange}
                        required
                    />
                </fieldset>*/}

                <div className="gen">
                  <fieldset>
                    <legend>Gender</legend>
                    <select>
                      <option value="Female">Female</option>
                      <option value="Female">male</option>
                      <option value="Other">Other</option>
                      <option value="Dont">Don't want to mention</option>
                    </select>
                  </fieldset>{" "}
                  <br />
                </div>
                {error && <div>{error}</div>}
                <a>
                  <button className="button" type="submit">
                    Sign-Up
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>)
    

      
      ) : (
        <div className="main">
          <div className="nav">
            <div className="nav--upper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
              </svg>
            </div>

            <div className="nav--lower">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              </svg>
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>
          <div className="content" style={{ display: "flex" }}>
            <div className="home_username">
              User <span />
              <img src={career} alt="" className="" />
            </div>

            <h1 className="homeName">Result</h1>
            <span className="tagline">{result}</span>
          </div>
        </div>
      )}
    </>
  );
};
