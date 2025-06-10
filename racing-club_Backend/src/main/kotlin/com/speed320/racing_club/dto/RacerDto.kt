package com.speed320.racing_club.dto

import com.speed320.racing_club.model.Racer
import java.time.LocalDate

data class RacerDto(
    val id: Long?,
    val fullName: String,
    val dateOfBirth: LocalDate,
    val category: String,
    val licenseNumber: String,
    val contactInfo: String?,
    val gender: Racer.Gender,
    val country: String,
    val teamId: Long,
    val photo: String?,
    val vehicleIds: List<Long> = emptyList()
)