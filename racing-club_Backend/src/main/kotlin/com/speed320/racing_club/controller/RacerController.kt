package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.RacerDto
import com.speed320.racing_club.service.RacerService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/racers")
class RacerController(
    private val racerService: RacerService
) {

    @PreAuthorize("hasAnyRole('Admin')")
    @PostMapping
    fun createRacer(@RequestBody dto: RacerDto): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.create(dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping("/{id}")
    fun getRacer(@PathVariable id: Long): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.getById(id))
    }

    @PreAuthorize("hasAnyRole('Admin', 'Racer', 'Organizer')")
    @GetMapping
    fun getAllRacers(): ResponseEntity<List<RacerDto>> {
        return ResponseEntity.ok(racerService.getAll())
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @PutMapping("/{id}")
    fun updateRacer(
        @PathVariable id: Long,
        @RequestBody dto: RacerDto
    ): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.update(id, dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @DeleteMapping("/{id}")
    fun deleteRacer(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(racerService.delete(id))
    }
}