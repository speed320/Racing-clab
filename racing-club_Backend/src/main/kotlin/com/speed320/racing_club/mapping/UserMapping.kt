package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.UserDto
import com.speed320.racing_club.model.Employee
import com.speed320.racing_club.model.Racer
import com.speed320.racing_club.model.User

fun User.toDto(): UserDto = UserDto(
    id = id,
    name = name,
    password = null,
    role = role,
    email = email,
    racerId = racer?.id,
    racerName = racer?.fullName,
    employeeId = employee?.id,
    employeeName = employee?.fullname
)

fun UserDto.toEntity(
    racerProvider: (Long?) -> Racer?,
    employeeProvider: (Long?) -> Employee?
): User = User(
    id = id,
    name = name,
    _password = password!!,
    role = role,
    email = email,
    racer = racerProvider(racerId),
    employee = employeeProvider(employeeId)
)