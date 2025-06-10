package com.speed320.racing_club.dto

import java.time.LocalTime

data class RatingDto(
    val racerId: Long,
    val raceId: Long,
    val racerPlace: Int,
    val racerTime: LocalTime
)
