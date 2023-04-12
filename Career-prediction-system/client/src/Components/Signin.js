import "./Signin.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  let location = useLocation();

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      console.log(res.data);
      window.location = "/";
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
        <div className="nav2--upper" style={{ color: "#FFFCF2" }}>
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
    </div>
  );
};

export default Signin;
