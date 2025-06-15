package com.speed320.racing_club.dto

import java.time.LocalTime

data class RatingDto(
    val racerId: Long,
    val racerName: String,
    val raceId: Long,
    val raceName: String,
    val racerPlace: Int,
    val racerTime: LocalTime
)
