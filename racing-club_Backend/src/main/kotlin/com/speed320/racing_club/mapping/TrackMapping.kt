package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.TrackDto
import com.speed320.racing_club.model.Track

fun Track.toDto(): TrackDto = TrackDto(
    id = id,
    name = name,
    length = length,
    turnsCount = turnsCount,
    surfaceType = surfaceType,
    description = description,
    country = country,
    city = city
)

fun TrackDto.toEntity(): Track = Track(
    id = id,
    name = name,
    length = length,
    turnsCount = turnsCount,
    surfaceType = surfaceType,
    description = description,
    country = country,
    city = city
)