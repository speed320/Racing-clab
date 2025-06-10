package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.TeamDto
import com.speed320.racing_club.model.Team

fun Team.toDto(): TeamDto = TeamDto(
    id = id,
    name = name,
    city = city,
    contactInfo = contactInfo,
    managerName = managerName
)

fun TeamDto.toEntity(): Team = Team(
    id = id,
    name = name,
    city = city,
    contactInfo = contactInfo,
    managerName = managerName
)