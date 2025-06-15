package com.speed320.racing_club.dto

import com.speed320.racing_club.model.Role

data class RegisterDto(
    val name: String,
    val email: String,
    val password: String,
    val role: Role
)
