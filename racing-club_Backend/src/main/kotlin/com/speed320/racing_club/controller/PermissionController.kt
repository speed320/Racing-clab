package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.EntityPermissionsDto
import com.speed320.racing_club.model.User
import com.speed320.racing_club.service.impl.PermissionService
import org.springframework.http.ResponseEntity
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/permissions")
class PermissionController(
    private val permissionService: PermissionService,
) {

    @GetMapping("/me")
    fun getCurrentUserPermissions(@AuthenticationPrincipal user: User): ResponseEntity<List<EntityPermissionsDto>> {
        val permissions = permissionService.getPermissionsForUser(user)
        return ResponseEntity.ok(permissions)
    }
}
