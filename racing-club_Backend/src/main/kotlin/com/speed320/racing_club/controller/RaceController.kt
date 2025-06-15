package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.RaceDto
import com.speed320.racing_club.service.RaceService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/races")
class RaceController(
    private val raceService: RaceService
) {

    @PreAuthorize("hasAnyRole('Admin', 'Organizer')")
    @PostMapping
    fun createRace(@RequestBody dto: RaceDto): ResponseEntity<RaceDto> {
        return ResponseEntity.ok(raceService.create(dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping("/{id}")
    fun getRace(@PathVariable id: Long): ResponseEntity<RaceDto> {
        return ResponseEntity.ok(raceService.getById(id))
    }

    @PreAuthorize("hasAnyRole('Admin', 'Racer', 'Organizer')")
    @GetMapping
    fun getAllRaces(): ResponseEntity<List<RaceDto>> {
        return ResponseEntity.ok(raceService.getAll())
    }

    @PreAuthorize("hasAnyRole('Admin', 'Organizer')")
    @PutMapping("/{id}")
    fun updateRace(
        @PathVariable id: Long,
        @RequestBody dto: RaceDto
    ): ResponseEntity<RaceDto> {
        return ResponseEntity.ok(raceService.update(id, dto))
    }

    @PreAuthorize("hasAnyRole('Admin', 'Organizer')")
    @DeleteMapping("/{id}")
    fun deleteRace(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(raceService.delete(id))
    }
}