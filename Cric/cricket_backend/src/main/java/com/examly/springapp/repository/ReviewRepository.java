package com.examly.springapp.repository;

import com.examly.springapp.model.Review;
import com.examly.springapp.web.dto.GetReviewsDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review,Long> {

    @Modifying
    @Transactional
    @Query(value = "update review set message= ?1, star_rating= ?2 where review_id= ?3",nativeQuery = true)
    void editReview(String mess , long rating, long id);

    @Modifying
    @Transactional
    @Query(value = "delete from review where review_id= ?1",nativeQuery = true)
    void deleteReview(long id);

    @Query(value = "select review_id as reviewId, message as message, star_rating as starRating, course_id as courseId, user_id as userId from review where course_id= ?1",nativeQuery = true)
    List<GetReviewsDto> getReviewsByCourseId(long courseId);

    @Query(value = "select review_id as reviewId, message as message, star_rating as starRating, course_id as courseId, user_id as userId from review where user_id= ?1",nativeQuery = true)
    List<GetReviewsDto> getReviewsByUserId(long userId);
}
