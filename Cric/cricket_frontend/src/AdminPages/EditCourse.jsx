import { useState, React, useEffect } from "react";
import "./AddCourse.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { getListSubheaderUtilityClass } from "@mui/material";
import {
  SettingsSuggestRounded,
  SettingsSystemDaydreamRounded,
} from "@mui/icons-material";
import axios from "axios";

function EditCourse(value1) {

  const [data, setData] = useState([{}]);
  const location = useLocation();
  var course_id = location.state.currentid.course_id;
  const [c_id, setC_id] = useState(course_id);
  console.log("course id recieved from view course is");
  console.log(course_id);

  useEffect(() => {
    var course_id = location.state.currentid.course_id;
    console.log("ins_id inside useeffecet:" + course_id);
    getcourses(course_id);
  }, []);
  function getcourses(course_id) {
    console.log("ins_id inside getintitute :" + course_id);
    fetch(value1.value1 + `admin/viewCourse/${course_id}`)
      .then((response) => response.json())
      .then((p) => {
        setData((prev) => [p]);
        console.log(p);
      });
  }


  const update = () => {
    
    console.warn(data[0]);
    fetch(value1.value1 + `admin/editCourse/${c_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data[0]),
    }).then((result) => {
      window.location.href = "/admin/ViewCourse";
    });
  };

  return (
    <div>
      <Header />
      {data.map((datas) => (
        <div className="add-course-container">
          <div className="form-container">
            <Grid
              container
              className="row"
              columnSpacing="3"
              item
              xs={12}
              sm={4}
              md={12}
            >
              <Grid className="elem">
                <input
                  type="text"
                  className="row1"
                  value={datas.courseName}
                  onChange={(e) => {
                    var letter = /^[a-zA-Z]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }

                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseName = value;
                      return [tempobj];
                    });
                    //setname(e.target.value);
                  }}
                  placeholder="Enter the course name"
                  id="editCourseName"
                ></input>
              </Grid>
              <Grid className="elem">
                <input
                  type="text"
                  value={datas.courseStudentCount}
                  onChange={(e) => {
                    //var num = /[^0-9]/gi;
                    var letter = /^[a-zA-Z]*$/;
                    var value = e.target.value.replace(letter, "");

                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseStudentCount = value;
                      return [tempobj];
                    });
                    //setcount(e.target.value);
                  }}
                  className="row1"
                  placeholder="Enter no of student enrolled for the Course"
                  id="editCourseEnrolled"
                ></input>
              </Grid>
            </Grid>

            <Grid
              container
              className="row"
              columnSpacing="3"
              item
              xs={12}
              sm={4}
              md={12}
            >
              <Grid className="elem">
                <input
                  type="text"
                  className="row1"
                  value={datas.courseAcademicYear}
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    // var letter = /^[a-zA-Z]*$/;
                    var value = e.target.value.replace(num, "");

                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseAcademicYear = value;
                      return [tempobj];
                      //setyear(e.target.value);
                    });
                  }}
                  placeholder="Enter the course academic year"
                  id="editCourseyear"
                ></input>
              </Grid>
              <Grid className="elem">
                <input
                  type="text"
                  className="row1"
                  value={datas.courseRequiredPercentage}
                  onChange={(e) => {
                    var num = /[^0-9]/gi;
                    // var letter = /^[a-zA-Z]*$/;
                    var value = e.target.value.replace(num, "");

                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseRequiredPercentage = value;
                      return [tempobj];
                      //setyear(e.target.value);
                    });
                    //setpercentage(e.target.value);
                  }}
                  placeholder="Enter the course required percentage"
                  id="editCoursepercentage"
                ></input>
              </Grid>
            </Grid>

            <Grid
              container
              className="row"
              columnSpacing="3"
              item
              xs={12}
              sm={4}
              md={12}
            >
              <Grid className="elem">
                <input
                  type="text"
                  className="row1"
                  value={datas.courseDuration}
                  onChange={(e) => {
                    var value = e.target.value;
                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseDuration = value;
                      return [tempobj];
                    });
                  }}
                  placeholder="Enter the course duration"
                  id="editCourseDuration"
                ></input>
              </Grid>

              <Grid className="elem">
                <textarea
                  className="row1"
                  value={datas.courseDescription}
                  onChange={(e) => {
                    var letter = /^[a-zA-Z ]*$/;
                    let value = e.target.value;
                    if (!value.match(letter)) {
                      value = "";
                    }

                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseDescription = value;
                      return [tempobj];
                      
                    });
                    
                  }}
                  placeholder="Enter the course description"
                  id="editCourseDescription"
                ></textarea>
              </Grid>
            </Grid>

            <Grid
              container
              className="row"
              columnSpacing="3"
              item
              xs={12}
              sm={4}
              md={12}
            >
              <Grid className="elem">
                <input
                  type="text"
                  className="row1"
                  value={datas.courseTiming}
                  onChange={(e) => {
                    var value = e.target.value;
                    setData((prev) => {
                      var tempobj = prev[0];
                      tempobj.courseTiming = value;
                      return [tempobj];
                      
                    });
                    
                  }}
                  placeholder="Enter the course timing"
                  id="editCourseTiming"
                ></input>
              </Grid>
            </Grid>

            <div className="btnadd">
              <Button
                variant="contained"
                type="submit"
                onClick={update}
                
                style={{ margin: "5px" }}
                id="updateCourse"
                startIcon={<Add />}
                color="primary"
              >
                Update Course{" "}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditCourse;
