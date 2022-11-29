package com.examly.springapp.web.controller;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;
import com.examly.springapp.web.dto.AddReviewDto;
import com.examly.springapp.web.dto.GetReviewsByCourseId;
import com.examly.springapp.web.dto.GetReviewsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/**/addReview")
    @ResponseBody
    public String addReview(@RequestBody AddReviewDto dto){

        return reviewService.addReview(dto);
    }

    @PutMapping("/**/editReview/{reviewId}")
    @ResponseBody
    public String editReview(@RequestBody AddReviewDto dto, @PathVariable("reviewId") long id){
        return reviewService.editReview(dto,id);
    }

    @DeleteMapping("/deleteReview/{reviewId}")
    @ResponseBody
    public String deleteReview(@PathVariable("reviewId") long id){
        return reviewService.deleteReview(id);
    }

    @GetMapping("/getReviewsByCourseId/{courseId}")
    @ResponseBody
    public List<GetReviewsByCourseId> getReviewsByCourseId(@PathVariable("courseId") long courseId){
          return reviewService.getReviewsByCourseId(courseId);
    }

    @GetMapping("/getReviewByUserId/{userId}")
    @ResponseBody
    public List<GetReviewsByCourseId> getReviewByCourseId(@PathVariable("userId") long userId){
        return reviewService.getReviewsByUserId(userId);
    }
}
