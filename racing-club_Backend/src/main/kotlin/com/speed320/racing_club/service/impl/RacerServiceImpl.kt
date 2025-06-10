package com.speed320.racing_club.service.impl

import com.speed320.racing_club.service.impl.AbstractCrudService
import com.speed320.racing_club.dto.RacerDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Racer
import com.speed320.racing_club.repository.RacerRepository
import com.speed320.racing_club.repository.TeamRepository
import com.speed320.racing_club.service.RacerService
import org.springframework.stereotype.Service

@Service
class RacerServiceImpl(
    private val racerRepository: RacerRepository,
    private val teamRepository: TeamRepository
) : AbstractCrudService<RacerDto, Long, Racer>(
    repository = racerRepository,
    toDto = Racer::toDto,
    toEntity = { dto ->
        val team = teamRepository.findById(dto.teamId).get()
        dto.toEntity { team }
    },
    updateEntity = { entity, dto ->
        entity.fullName = dto.fullName
        entity.dateOfBirth = dto.dateOfBirth
        entity.category = dto.category
        entity.licenseNumber = dto.licenseNumber
        entity.contactInfo = dto.contactInfo
        entity.gender = dto.gender
        entity.country = dto.country
        entity.photo = dto.photo
        entity.team = teamRepository.findById(dto.teamId).get()
    }
), RacerService