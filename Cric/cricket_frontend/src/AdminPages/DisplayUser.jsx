import Header from "../Components/Header";
// import RowView from'./RowView';
import Button from "@mui/material/Button";
import { useState, React, useEffect } from "react";

import Grid from "@mui/material/Grid";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./DisplayUser.css";
// import Link from '@mui/material/Link'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";
import Search from "@mui/icons-material/Search";
import { Table, TableHead, TableRow, TableBody } from "@mui/material";

// import React, { Component } from 'react'
// import EmployeeService from '../Services/StudentService'

const DisplayUser = (value1) => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getadmission();
  }, []);

  function getadmission() {
    fetch(value1.value1 + "admin/getAllAdmissionRequests")
      .then((response) => response.json())
      .then((p) => setData(p));
  }

  function deleteadmission(admissionId) {
    // alert(id)
    fetch(value1.value1 + `admin/deleteAdmission?admissionId=${admissionId}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((resp) => {
        console.warn();
        getadmission();
      });
    });
  }

  function addid(adm_id) {
    console.log("inside addid user adm_id is:");
    console.log(adm_id);
    const toEditUser = () => {
      console.log(adm_id);
      navigate("/admin/EditUser", {
        state: { admid: { adm_id } },
      });
    };
    toEditUser();
  }

  return (
    <div>
      <Header />
      <table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>courseId</th>
            <th>name</th>
            <th>email</th>
            <th>mobileNo</th>
            <th>gender</th>
            <th>fatherName</th>
            <th>motherName</th>
            <th>hscName</th>
            <th>hscMarks</th>
            {/* <th>Address</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr key={datas.admissionId}>
              {/* <td>{datas.userId}</td> */}
              <td>{datas.courseId} </td>
              <td>
                {datas.firstName} {datas.lastName}
              </td>
              <td>{datas.email}</td>
              <td>{datas.mobile}</td>
              <td>{datas.gender}</td>
              <td>{datas.fatherName}</td>
              <td>{datas.motherName}</td>
              <td>{datas.hscName}</td>
              <td>{datas.hscMarks}</td>
              <td>
                <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.admissionId);
                    addid(datas.admissionId);
                  }}
                >
                  <button
                    className="zindex"
                    // onClick={()=>selectUser(datas.id)}
                    variant="contained"
                    style={{
                      margin: "5px",
                      backgroundColor: "blue",
                      color: "white",
                      zIndex: -1,
                    }}
                    endIcon={<Edit />}
                    color="primary"
                  >
                    Update/View{" "}
                  </button>
                </a>
                {/* </Link> */}

                <button
                  className="zindex"
                  onClick={() => deleteadmission(datas.admissionId)}
                  variant="contained"
                  style={{
                    margin: "5px",
                    backgroundColor: "red",
                    color: "white",
                    zIndex: -1,
                  }}
                  color="error"
                  endIcon={<Delete />}
                >
                  Delete
                </button>
              </td>
            </tr>

            //  <li></li>
          ))}

        </tbody>
      </table>
      <div className="btnadd">
        <Link
          to="/admin/AddUser"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            //  onClick={getemail}
            type="submit"
            variant="contained"
            style={{ margin: "5px", zIndex: -1 }}
            startIcon={<Add />}
            color="primary"
          >
            Add Student{" "}
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default DisplayUser;
