package com.speed320.racing_club.service.impl

import com.speed320.racing_club.service.impl.AbstractCrudService
import com.speed320.racing_club.dto.RaceDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Race
import com.speed320.racing_club.repository.RaceRepository
import com.speed320.racing_club.service.RaceService
import org.springframework.stereotype.Service

@Service
class RaceServiceImpl(
    private val raceRepository: RaceRepository
) : AbstractCrudService<RaceDto, Long, Race>(
    repository = raceRepository,
    toDto = Race::toDto,
    toEntity = RaceDto::toEntity,
    updateEntity = { entity, dto ->
        entity.name = dto.name
        entity.date = dto.date
        entity.location = dto.location
        entity.type = dto.type
        entity.distance = dto.distance
        entity.description = dto.description
        entity.place = dto.place
        entity.time = dto.time
    }
), RaceService