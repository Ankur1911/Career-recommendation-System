import "./Signup.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  let location = useLocation();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      history.go("/signin");
      console.log(res.message);
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
    <div className="main">
      <div className="nav2">
        <div className="nav2--upper">
          <a
            href="/signin"
            style={{
              color: location.pathname === "/signin" ? "#FFFCF2" : "#ACA8A2",
            }}
          >
            Sign-in
          </a>{" "}
          &nbsp; &nbsp;
          <a
            href="/signup"
            style={{
              color: location.pathname === "/signup" ? "#FFFCF2" : "#ACA8A2",
            }}
          >
            Sign-up
          </a>
        </div>
      </div>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <h1 className="name">Sign-up</h1>

            <fieldset>
              <legend>Email</legend>
              <input
                type="email"
                className="s"
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
                value={data.email}
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
                onChange={handleChange}
                value={data.password}
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
                  onChange={handleChange}
                  value={data.firstName}
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
                onChange={handleChange}
                value={data.lastName}
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
            <a href="/signin">
              <button className="button" type="submit">
                Sign-Up
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
