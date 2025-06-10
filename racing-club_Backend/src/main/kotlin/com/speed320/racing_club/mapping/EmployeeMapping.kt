package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.EmployeeDto
import com.speed320.racing_club.model.Employee

fun Employee.toDto(): EmployeeDto = EmployeeDto(
    id = id,
    fullname = fullname,
    dateOfBirth = dateOfBirth,
    passport = passport,
    gender = gender,
    placeOfLiving = placeOfLiving,
    position = position
)

fun EmployeeDto.toEntity(): Employee = Employee(
    id = id,
    fullname = fullname,
    dateOfBirth = dateOfBirth,
    passport = passport,
    gender = gender,
    placeOfLiving = placeOfLiving,
    position = position
)