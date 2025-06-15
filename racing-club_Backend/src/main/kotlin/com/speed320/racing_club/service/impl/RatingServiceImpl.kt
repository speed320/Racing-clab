package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.RatingDto
import com.speed320.racing_club.model.Rating
import com.speed320.racing_club.model.RatingId
import com.speed320.racing_club.repository.RaceRepository
import com.speed320.racing_club.repository.RacerRepository
import com.speed320.racing_club.repository.RatingRepository
import com.speed320.racing_club.service.RatingService
import org.springframework.stereotype.Service

@Service
class RatingServiceImpl(
    private val ratingRepository: RatingRepository,
    private val racerRepository: RacerRepository,
    private val raceRepository: RaceRepository
) : AbstractCrudService<RatingDto, RatingId, Rating>(
    repository = ratingRepository,
    toDto = { rating ->
        RatingDto(
            racerId = rating.id!!.racerId,
            racerName = rating.racer.fullName,
            raceId = rating.id!!.raceId,
            raceName = rating.race.name,
            racerPlace = rating.racerPlace,
            racerTime = rating.racerTime
        )
    },
    toEntity = { dto ->
        Rating(
            id = RatingId(dto.racerId, dto.raceId),
            racerPlace = dto.racerPlace,
            racerTime = dto.racerTime,
            racer = racerRepository.findById(dto.racerId).get(),
            race = raceRepository.findById(dto.raceId).get()
        )
    },
    updateEntity = { entity, dto ->
        entity.racerPlace = dto.racerPlace
        entity.racerTime = dto.racerTime
    }
), RatingService