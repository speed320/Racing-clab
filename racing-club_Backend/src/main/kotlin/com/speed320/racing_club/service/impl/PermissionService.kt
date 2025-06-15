package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.*
import com.speed320.racing_club.dto.PermissionAction.*
import com.speed320.racing_club.model.Role
import com.speed320.racing_club.model.User
import org.springframework.stereotype.Service

@Service
class PermissionService {

    fun getPermissionsForUser(user: User): List<EntityPermissionsDto> {
        return when (user.role) {
            Role.Admin -> allPermissions()
            Role.Organizer -> organizerPermissions()
            Role.Racer -> racerPermissions()
        }
    }

    private fun allPermissions(): List<EntityPermissionsDto> {
        return EntityType.values().map {
            EntityPermissionsDto(it, PermissionAction.values().toList())
        }
    }

    private fun organizerPermissions(): List<EntityPermissionsDto> {
        return listOf(
            EntityPermissionsDto(EntityType.RACE, listOf(CREATE, READ, UPDATE, DELETE)),
            EntityPermissionsDto(EntityType.RATING, listOf(CREATE, READ, UPDATE, DELETE)),

            EntityPermissionsDto(EntityType.TEAM, listOf(READ)),
            EntityPermissionsDto(EntityType.RACER, listOf(READ)),
            EntityPermissionsDto(EntityType.TRACK, listOf(READ)),
            EntityPermissionsDto(EntityType.VEHICLE, listOf(READ))
        )
    }

    private fun racerPermissions(): List<EntityPermissionsDto> {
        return listOf(
            EntityPermissionsDto(EntityType.RACER, listOf(READ)),
            EntityPermissionsDto(EntityType.TEAM, listOf(READ)),
            EntityPermissionsDto(EntityType.RACE, listOf(READ)),
            EntityPermissionsDto(EntityType.TRACK, listOf(READ)),
            EntityPermissionsDto(EntityType.RATING, listOf(READ)),
            EntityPermissionsDto(EntityType.VEHICLE, listOf(READ))
        )
    }
}

