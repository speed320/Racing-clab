package com.speed320.racing_club.service.impl

import com.speed320.racing_club.service.impl.AbstractCrudService
import com.speed320.racing_club.dto.TrackDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Track
import com.speed320.racing_club.repository.TrackRepository
import com.speed320.racing_club.service.TrackService
import org.springframework.stereotype.Service

@Service
class TrackServiceImpl(
    private val trackRepository: TrackRepository
) : AbstractCrudService<TrackDto, Long, Track>(
    repository = trackRepository,
    toDto = Track::toDto,
    toEntity = TrackDto::toEntity,
    updateEntity = { entity, dto ->
        entity.name = dto.name
        entity.length = dto.length
        entity.turnsCount = dto.turnsCount
        entity.surfaceType = dto.surfaceType
        entity.description = dto.description
        entity.country = dto.country
        entity.city = dto.city
    }
), TrackService