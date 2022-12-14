import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const p = {
  fontSize: "10px",
  marginTop: "5px",
  marginBottom: "0px",
  fontStyle: "italic",
  fontWeight: "bold",
  color: "black",
};
const h1 = {
  fontSize: "15px",
  color: "#a40865",
};
const heading = {
  color: "#a40865",
  fontStyle: "italic",
  fontWeight: "bold",
  fontSize: "larger",
};
const butt = {
  backgroundColor: "#a40865",
  color: "white",
  cursor: "pointer",
};
const di = {
  height: "600px",
  width: "350px",
};
const text = {
  border: "1px solid black",
  borderRadius: "25px",
  textAlign: "center",
  backgroundColor: "#F8EFF4",
};

const LoginForm = (value1) => {
  const [usear, setUsear] = useState({
    email: "",
    userPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUsear({ ...usear, [name]: value });
  };

  const re = async (event) => {
    event.preventDefault();

    const { email, userPassword } = usear;
    if (email && userPassword) {
      fetch(value1.value1 + "admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usear),
      })
        .then((response) => response.json())
        .then((p) => {
          //alert(p.role)
          //console.log(p);
          if (p.role === "ROLE_admin") {
            localStorage.setItem("admin", p.userId);
            window.location.href = "admin/ViewInstitute";
          } else if (p.role === "ROLE_student") {
            localStorage.setItem("user", p.userId);
            localStorage.setItem("username", p.username);
            window.location.href = "user/HomepageStudent";
          } else {
            alert(p.Error);
          }
        });
    } else {
      alert("Email or Passworld can't be empty");
    }
  };

  return (
    <div className="first" style={di}>
      <h1 style={heading}> Cricket Academy </h1>
      <h1 style={heading}> Login </h1>
      <br></br>

      <form className="second">
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          name="email"
          value={usear.email}
          onChange={handleInputs}
          autoComplete="off"
          style={text}
          required
        />
        <br></br>
        <input
          type="password"
          name="userPassword"
          value={usear.userPassword}
          onChange={handleInputs}
          id="password"
          autoComplete="off"
          style={text}
          placeholder="Enter passworld"
          required
        />

        <br></br>

        <input
          type="button"
          id="loginButton"
          onClick={re}
          value="Login"
          style={butt}
        />
        <h1 style={p}> New User/admin?</h1>
        <a href="/Register" id="signupLink" style={h1}>
          {" "}
          Sign up
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
