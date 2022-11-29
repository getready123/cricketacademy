import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import  from '../Components/InstituteCard';
import Rating from "@mui/material/Rating";

function GetRating({ value1, courseid }) {
  console.log("recieved course id :");
  console.log(courseid);
  const [data, setData] = useState([]);
  const [no_courses, setNo_courses] = useState(0);
  const [flag, setFlag] = useState(false);
  const [reviewarr, setReviewarr] = useState([]);
  const [ratevalue, setRateValue] = React.useState(0);

  useEffect(async () => {
    await getallreviews();
    getreviews();
  }, []);

  //function getno_courses() {}

  function getallreviews() {
    var star = 0;
    console.log("no of courses " + no_courses);
    for (var i = 1; i <= 6; i++) {
      fetch(value1 + `getReviewsByCourseId/${i}`)
        .then((response) => response.json())
        .then((p) => {
          console.log(p);
          console.log("inside getallreview");
          setReviewarr((prev) => [...prev, p]);
        });
    }
  }

  function getreviews() {
    console.log("inside getreview");
    console.log("courseid " + courseid);
    // console.log("arr recieved in getreview : " + arr);

    var sum = 0;
    var final_sum = [];
    console.log("review 0 index: ");
    console.log(reviewarr[0]);
    final_sum = reviewarr[0].map((x) => {
      console.log(x.starRating);
      return Number(x.starRating);
    });

    console.log(final_sum);

    sum = final_sum.reduce((a, b) => a + b, 0);
    console.log(sum);
    var star = ((sum / (reviewarr[courseid].length * 5)) * 10) / 2;
    console.log("star in getreview: " + star);
    setRateValue(star);
  }

  return (
    <div>
      <h1>This is all reviews for this course</h1>
      <div>
        <box>
          <Typography>Overall Rating</Typography>
          <Rating
            name="read-only"
            value={ratevalue == 0 ? 0 : ratevalue}
            readOnly
          />
        </box>
      </div>
    </div>
  );
}
export default GetRating;
