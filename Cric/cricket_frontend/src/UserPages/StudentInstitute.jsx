import React, { Component } from "react";

// import InstitutecardStudent from '../Components/InstituteCard';

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "../Components/HomePage.css";
import { Link, Outlet } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import HeaderStudent from "../Components/HeaderStudent";
import Card from "../Components/Card";
import UserCard from "../Components/UserInstituteCards";

function StudentInstitute(value1) {
  return (
    <div>
      <HeaderStudent />
      <UserCard />
      <div className="App">
        <div className="container"></div>
      </div>

      <Outlet />
    </div>
  );
}

export default StudentInstitute;
