package com.speed320.racing_club.dto

data class TrackDto(
    val id: Long?,
    val name: String,
    val length: Float?,
    val turnsCount: Int?,
    val surfaceType: String?,
    val description: String?,
    val country: String?,
    val city: String?,
    val raceIds: List<Long> = emptyList()
)
