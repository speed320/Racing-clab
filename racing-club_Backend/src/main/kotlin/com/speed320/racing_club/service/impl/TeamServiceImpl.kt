package com.speed320.racing_club.service.impl

import com.speed320.racing_club.service.impl.AbstractCrudService
import com.speed320.racing_club.dto.TeamDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Team
import com.speed320.racing_club.repository.TeamRepository
import com.speed320.racing_club.service.TeamService
import org.springframework.stereotype.Service

@Service
class TeamServiceImpl(
    private val teamRepository: TeamRepository
) : AbstractCrudService<TeamDto, Long, Team>(
    repository = teamRepository,
    toDto = Team::toDto,
    toEntity = TeamDto::toEntity,
    updateEntity = { entity, dto ->
        entity.name = dto.name
        entity.city = dto.city
        entity.contactInfo = dto.contactInfo
        entity.managerName = dto.managerName
    }
), TeamService