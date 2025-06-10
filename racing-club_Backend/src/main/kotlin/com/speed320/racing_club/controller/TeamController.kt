package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.TeamDto
import com.speed320.racing_club.service.TeamService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/teams")
class TeamController(
    private val teamService: TeamService
) {

    @PostMapping
    fun createTeam(@RequestBody dto: TeamDto): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.create(dto))
    }

    @GetMapping("/{id}")
    fun getTeam(@PathVariable id: Long): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.getById(id))
    }

    @GetMapping
    fun getAllTeams(): ResponseEntity<List<TeamDto>> {
        return ResponseEntity.ok(teamService.getAll())
    }

    @PutMapping("/{id}")
    fun updateTeam(
        @PathVariable id: Long,
        @RequestBody dto: TeamDto
    ): ResponseEntity<TeamDto> {
        return ResponseEntity.ok(teamService.update(id, dto))
    }

    @DeleteMapping("/{id}")
    fun deleteTeam(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(teamService.delete(id))
    }
}