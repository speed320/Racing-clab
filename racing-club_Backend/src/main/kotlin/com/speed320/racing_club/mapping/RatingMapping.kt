package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.RatingDto
import com.speed320.racing_club.model.Race
import com.speed320.racing_club.model.Racer
import com.speed320.racing_club.model.Rating
import com.speed320.racing_club.model.RatingId

fun Rating.toDto(): RatingDto = RatingDto(
    racerId = id?.racerId ?: throw IllegalStateException("Rating has no ID"),
    racerName = racer.fullName,
    raceId = id?.raceId ?: throw IllegalStateException("Rating has no ID"),
    raceName = race.name,
    racerPlace = racerPlace,
    racerTime = racerTime
)

fun RatingDto.toEntity(
    racerProvider: (Long) -> Racer,
    raceProvider: (Long) -> Race
): Rating = Rating(
    id = RatingId(racerId, raceId),
    racerPlace = racerPlace,
    racerTime = racerTime,
    racer = racerProvider(racerId),
    race = raceProvider(raceId)
)