package com.speed320.racing_club.dto

import java.time.LocalDate
import java.time.LocalTime

data class RaceDto(
    val id: Long?,
    val name: String,
    val date: LocalDate,
    val location: String?,
    val type: String,
    val distance: Float?,
    val description: String?,
    val place: String?,
    val time: LocalTime?,
    val trackIds: List<Long> = emptyList()
)