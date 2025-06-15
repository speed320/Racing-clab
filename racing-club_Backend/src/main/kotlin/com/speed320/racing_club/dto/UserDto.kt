package com.speed320.racing_club.dto

import com.speed320.racing_club.model.Role

data class UserDto(
    val id: Long?,
    val name: String,
    val _password: String,
    val role: Role,
    val email: String,
    val racerId: Long?,
    val racerName: String?,
    val employeeId: Long?,
    val employeeName: String?,
)
