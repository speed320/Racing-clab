package com.speed320.racing_club.dto

import com.fasterxml.jackson.annotation.JsonProperty
import com.speed320.racing_club.model.Role

data class UserDto(
    val id: Long?,
    val name: String,
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    val password: String? = null,
    val role: Role,
    val email: String,
    val racerId: Long?,
    val racerName: String?,
    val employeeId: Long?,
    val employeeName: String?,
)
