package com.speed320.racing_club.dto

data class AuthResponseDto(
    val token: String,
    val email: String,
    val role: String
)
