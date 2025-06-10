package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.RaceDto
import com.speed320.racing_club.model.Race

fun Race.toDto(): RaceDto = RaceDto(
    id = id,
    name = name,
    date = date,
    location = location,
    type = type,
    distance = distance,
    description = description,
    place = place,
    time = time
)

fun RaceDto.toEntity(): Race = Race(
    id = id,
    name = name,
    date = date,
    location = location,
    type = type,
    distance = distance,
    description = description,
    place = place,
    time = time
)