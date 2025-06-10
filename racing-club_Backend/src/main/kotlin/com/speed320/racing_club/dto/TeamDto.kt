package com.speed320.racing_club.dto

data class TeamDto(
    val id: Long?,
    val name: String,
    val city: String?,
    val contactInfo: String?,
    val managerName: String?,
    val racerIds: List<Long> = emptyList()
)
