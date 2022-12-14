import "./AddUser.css";
import Header from "../Components/Header";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

function EditUser(value1) {
  let row1 = {
    marginTop: "15px",
    padding: "10px",
    marginRight: "90px",
    width: "350px",
    marginLeft: "30px",
  };
  let row = {
    margintop: "10px",
    width: "100%",
  };
  let emailage = {
    width: "500px",
    marginTop: "15px",
    padding: "10px",
    marginRight: "90px",
    marginLeft: "30px",
  };
  let emailagegrid = {
    width: "500px",
    marginTop: "15px",
    padding: "3px",
    // marginRight:"90px",

    marginLeft: "30px",
  };

  let addrinfo = {
    marginTop: "15px",
    padding: "10px",
    marginLeft: "120px",
    width: "815px",
    height: "290px",
    marginLeft: "24px",
  };

  let button = {
    position: "relative",
    left: "587px",
    margin: "20px",
  };

  const [data, setData] = useState([{}]);
  const location = useLocation();
  var adm_id = location.state.admid.adm_id;
  const [u_id, setU_id] = useState(adm_id);
  console.log("adm id recieved from view user is");
  console.log(adm_id);

  useEffect(() => {
    getusers(adm_id);
  }, []);
  function getusers(adm_id) {
    console.log("adm_id inside getintitute :" + adm_id);
    fetch(value1.value1 + `/admin/getAdmission?admissionId=${adm_id}`)
      .then((response) => response.json())
      .then((p) => {
        setData((prev) => [p]);
        console.log(p);
      });
  }

  const update = () => {
    console.log(data[0]);
    fetch(value1.value1 + `admin/editAdmission?admissionId=${adm_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data[0]),
    }).then((result) => {
      window.location.href = "/admin/DisplayUser";
    });
  };

  function handleChange(e, v) {
    //var num = /[^0-9]/gi;
    var name = e.target.name;
    var value = v;
    // var letter = /^[a-zA-Z]*$/;
    // var value = e.target.value.replace(letter, "");

    setData((prev) => {
      var tempobj = prev[0];
      tempobj[name] = value;
      return [tempobj];
    });
    //setcount(e.target.value);
  }

  return (
    <div>
      <Header />
      {data.map((datas) => (
        <form action="" method="">
          <Grid
            container
            style={row}
            columnSpacing="3"
            item
            xs={12}
            sm={4}
            md={12}
          >
            <Grid style={row1}>
              <input
                type="text"
                style={row1}
                autoFocus
                defaultValue={datas.userId}
                name="userId"
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  let value = e.target.value.replace(num, "");
                  handleChange(e, value);
                }}
                placeholder="enter userId"
                id="userId"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                defaultValue={datas.courseId}
                name="courseId"
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  let value = e.target.value.replace(num, "");
                  handleChange(e, value);
                }}
                style={row1}
                placeholder="enter courseId"
                id="courseId"
              ></input>
            </Grid>

            <Grid style={row1}>
              <select
                style={row1}
                required
                placeholder="enter eligibility"
                autoFocus
                value={datas.eligibility}
                name="eligibility"
                onChange={(e) => {
                  var value = e.target.value;
                  handleChange(e, value);
                }}
                id="options"
              >
                <option value="" disabled selected>
                  {" "}
                  enter eligibility
                </option>
                <option value="yes">yes</option>
                <option value="no">No</option>
              </select>

            </Grid>
          </Grid>

          <Grid
            container
            style={row}
            columnSpacing="3"
            item
            xs={12}
            sm={4}
            md={12}
          >
            <Grid style={row1}>
              <input
                type="text"
                style={row1}
                autoFocus
                defaultValue={datas.firstName}
                name="firstName"
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!value.match(letter)) {
                    value = "";
                  }
                  handleChange(e, value);
                }}
                placeholder="enter your first name"
                id="firstName"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                defaultValue={datas.lastName}
                name="lastName"
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!value.match(letter)) {
                    value = "";
                  }
                  handleChange(e, value);
                }}
                style={row1}
                placeholder="enter your last name"
                id="lastName"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                defaultValue={datas.gender}
                name="gender"
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!value.match(letter)) {
                    value = "";
                  }
                  handleChange(e, value);
                }}
                style={row1}
                placeholder="enter male or female"
                id="male/female"
              ></input>
            </Grid>
          </Grid>

          <Grid container style={row} item xs={12} sm={4} md={12}>
            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                defaultValue={datas.fatherName}
                name="fatherName"
                onChange={(e) => {
                  var letter = /^[a-zA-Z]*$/;
                  let value = e.target.value;
                  if (!value.match(letter)) {
                    value = "";
                  }
                  handleChange(e, value);
                }}
                style={row1}
                placeholder="enter your father name"
                id="fatherName"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                type="text"
                autoFocus
                defaultValue={datas.mobile}
                name="mobile"
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  var value = e.target.value.replace(num, "");
                  handleChange(e, value);
                }}
                style={row1}
                placeholder="enter phone number"
                id="phoneNumber1"
              ></input>
            </Grid>

            <Grid style={row1}>
              <input
                style={row1}
                type="text"
                autoFocus
                defaultValue={datas.age}
                name="age"
                onChange={(e) => {
                  var num = /[^0-9]/gi;
                  var value = e.target.value.replace(num, "");
                  handleChange(e, value);
                }}
                placeholder="enter your age"
                id="age"
              ></input>
            </Grid>
          </Grid>

          <Grid container style={row} item xs={12} sm={4} md={12}>
            <Grid>
              <Grid style={row1}>
                <input
                  style={row1}
                  type="text"
                  autoFocus
                  defaultValue={datas.motherName}
                  name="motherName"
                  onChange={(e) => {
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }
                    handleChange(e, value);
                  }}
                  placeholder="enter your mother name"
                  id="motherName"
                ></input>
              </Grid>

              <Grid style={row1}>
                <input
                  style={row1}
                  type="text"
                  autoFocus
                  defaultValue={datas.email}
                  name="email"
                  onChange={(e) => {
                    let value = e.target.value;
                    handleChange(e, value);
                  }}
                  placeholder="enter emailId"
                  id="emailId"
                ></input>
              </Grid>
              <Grid style={row1}>
                <input
                  type="text"
                  autoFocus
                  defaultValue={datas.hscName}
                  name="hscName"
                  onChange={(e) => {
                    // var num = /[^0-9]/gi;
                    // var letter = /^[a-zA-Z]*$/;
                    // var value = e.target.value.replace(letter, "");
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }
                    handleChange(e, value);

                    //setuserid(value);
                    //  setuserid(e.target.value)
                  }}
                  style={row1}
                  placeholder="enter hsc name"
                  id="hscName"
                ></input>
              </Grid>

            </Grid>
            <Grid>
              <fieldset style={addrinfo} className="addressinfo">
                <legend>Address Information</legend>
                <label for="houseNo">House No :</label>
                <input
                  className="element"
                  type="text"
                  autoFocus
                  defaultValue={datas.houseNumber}
                  name="houseNumber"
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    var value = e.target.value.replace(num, "");
                    handleChange(e, value);
                  }}
                  id="houseNo"
                ></input>{" "}
                <br></br>
                <label for="streetName">Street Number :</label>
                <input
                  className="element"
                  type="text"
                  autoFocus
                  defaultValue={datas.streetNumber}
                  name="streetNumber"
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    var value = e.target.value.replace(num, "");
                    handleChange(e, value);
                  }}
                  id="streetNumber"
                ></input>
                <br></br>
                <label for="areaName">Area Name :</label>
                <input
                  className="element"
                  type="text"
                  autoFocus
                  defaultValue={datas.areaName}
                  onChange={(e) => {
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }
                    handleChange(e, value);
                  }}
                  id="areaName"
                  name="areaName"
                ></input>
                <label for="pincode">Pincode :</label>
                <input
                  type="text"
                  id="pincode"
                  autoFocus
                  defaultValue={datas.pinCode}
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    var value = e.target.value.replace(num, "");
                    handleChange(e, value);
                  }}
                  name="pinCode"
                ></input>{" "}
                <br></br>
                <label for="state">State :</label>
                <input
                  className="element"
                  type="text"
                  autoFocus
                  defaultValue={datas.state}
                  onChange={(e) => {
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }
                    handleChange(e, value);
                  }}
                  id="state"
                  name="state"
                ></input>
                <label for="nationality">Nationality :</label>
                <input
                  type="text"
                  id="nationality"
                  autoFocus
                  defaultValue={datas.nationality}
                  onChange={(e) => {
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }
                    handleChange(e, value);
                  }}
                  name="nationality"
                ></input>
              </fieldset>
            </Grid>

            <Grid container style={row} item xs={12} sm={4} md={12}>
              <Grid style={row1}>
                <input
                  type="text"
                  autoFocus
                  defaultValue={datas.hscMarks}
                  name="hscMarks"
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    var value = e.target.value.replace(num, "");
                    handleChange(e, value);
                  }}
                  style={row1}
                  placeholder="enter hsc marks"
                  id="hscMarks"
                ></input>
              </Grid>

              <Grid style={row1}></Grid>
            </Grid>
            <Link
              to="/admin/DisplayUser"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <Grid style={button} item xs={3} sm={1} md={1}>
                <Button onClick={update} variant="contained" color="primary">
                  Update user
                </Button>
              </Grid>
            </Link>
            <Link
              to="/admin/DisplayUser"
              style={{ color: "red", textDecoration: "none" }}
            >
              <Grid style={button} item xs={3} sm={1} md={1}>
                <Button variant="contained" color="inherit">
                  Cancel
                </Button>
              </Grid>
            </Link>
          </Grid>
        </form>
      ))}
    </div>
  );
}

export default EditUser;
