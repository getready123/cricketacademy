import Footer from "./Footer";
import Header from "./Header";
// import InstituteCard from './InstituteCard';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./HomePage.css";
import { Link, Outlet } from "react-router-dom";
import Add from "@mui/icons-material/Add";
import CourseSearchFilter from "./CourseSearchFilter";
import Card from "./Card";
import Course from "../UserPages/Course";

function HomePage() {
  let grida = {
    width: "350px",
    height: "40px",
    position: "relative",
    left: "200px",
  };

  let search = {
    marginTop: "40px",
    marginBottom: "60px",
    paddingBottom: "60px",
    padding: "20px",
    width: "600px",
    position: "relative",
    left: "310px",
    // width:"100%"
  };
  let button = {
    width: "100px",
    position: "relative",
    top: "24px",
  };

  return (
    <div>
      <Header />

      {/* <div className="course-search-and-filter">
        <div className="course-search">
          <input
            className="course-search-input"
            type="text"
            name="course"
            placeholder="Search Course"
          ></input>
          <Button variant="outlined" id="searchCourse" className="btn">
            Search
          </Button>
        </div>
        <div className="course-filter">
          <div className="filter1">Filter By</div>

          <Button variant="outlined"> Location</Button>
          <Button variant="outlined"> Institute</Button>
          <Button variant="outlined"> Course</Button>
        </div>
      </div> */}
      <Card />

      <div className="btnadd">
        <Link
          to="/admin/addAcademy"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            variant="contained"
            style={{ margin: "5px" }}
            startIcon={<Add />}
            color="primary"
          >
            Add Institute{" "}
          </Button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
export default HomePage;
