package com.speed320.racing_club.dto

data class VehicleDto(
    val id: Long?,
    val type: String,
    val make: String,
    val model: String,
    val year: Int,
    val engineNumber: String,
    val racerId: Long,
    val description: String?
)
