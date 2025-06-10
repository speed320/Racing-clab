package com.speed320.racing_club.dto

data class UserDto(
    val id: Long?,
    val name: String,
    val _password: String,
    val role: String,
    val email: String,
    val racerId: Long?,
    val employeeId: Long?
)
