package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Rating
import com.speed320.racing_club.model.RatingId
import org.springframework.data.jpa.repository.JpaRepository

interface RatingRepository : JpaRepository<Rating, RatingId> {
}