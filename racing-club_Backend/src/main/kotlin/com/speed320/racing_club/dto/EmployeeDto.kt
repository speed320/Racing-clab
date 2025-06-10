package com.speed320.racing_club.dto

import com.speed320.racing_club.model.Racer
import java.time.LocalDate

data class EmployeeDto(
    val id: Long?,
    val fullname: String,
    val dateOfBirth: LocalDate,
    val passport: String,
    val gender: Racer.Gender,
    val placeOfLiving: String?,
    val position: String
)
