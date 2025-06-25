package com.speed320.racing_club.dto

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.LocalTime

data class RatingDto(
    val racerId: Long,
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    val racerName: String? = null,
    val raceId: Long,
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    val raceName: String? = null,
    val racerPlace: Int,
    val racerTime: LocalTime
)
