package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.TeamDto
import com.speed320.racing_club.service.TeamService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/teams")
class TeamController(
    private val teamService: TeamService
) {

    @PreAuthorize("hasAnyRole('Admin')")
    @PostMapping
    fun createTeam(@RequestBody dto: TeamDto): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.create(dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping("/{id}")
    fun getTeam(@PathVariable id: Long): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.getById(id))
    }

    @PreAuthorize("hasAnyRole('Admin', 'Racer', 'Organizer')")
    @GetMapping
    fun getAllTeams(): ResponseEntity<List<TeamDto>> {
        return ResponseEntity.ok(teamService.getAll())
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @PutMapping("/{id}")
    fun updateTeam(
        @PathVariable id: Long,
        @RequestBody dto: TeamDto
    ): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.update(id, dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @DeleteMapping("/{id}")
    fun deleteTeam(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(teamService.delete(id))
    }
}