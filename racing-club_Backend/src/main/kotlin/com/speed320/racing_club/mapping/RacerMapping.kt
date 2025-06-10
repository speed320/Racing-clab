package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.RacerDto
import com.speed320.racing_club.model.Racer
import com.speed320.racing_club.model.Team

fun Racer.toDto(): RacerDto = RacerDto(
    id = id,
    fullName = fullName,
    dateOfBirth = dateOfBirth,
    category = category,
    licenseNumber = licenseNumber,
    contactInfo = contactInfo,
    gender = gender,
    country = country,
    teamId = team.id!!,
    photo = photo
)

fun RacerDto.toEntity(teamProvider: (Long) -> Team): Racer = Racer(
    id = id,
    fullName = fullName,
    dateOfBirth = dateOfBirth,
    category = category,
    licenseNumber = licenseNumber,
    contactInfo = contactInfo,
    gender = gender,
    country = country,
    team = teamProvider(teamId),
    photo = photo
)