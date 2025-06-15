package com.speed320.racing_club.dto

data class EntityPermissionsDto(
    val entity: EntityType,
    val actions: List<PermissionAction>
)
