package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.RacerDto
import com.speed320.racing_club.service.RacerService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/racers")
class RacerController(
    private val racerService: RacerService
) {

    @PostMapping
    fun createRacer(@RequestBody dto: RacerDto): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.create(dto))
    }

    @GetMapping("/{id}")
    fun getRacer(@PathVariable id: Long): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.getById(id))
    }

    @GetMapping
    fun getAllRacers(): ResponseEntity<List<RacerDto>> {
        return ResponseEntity.ok(racerService.getAll())
    }

    @PutMapping("/{id}")
    fun updateRacer(
        @PathVariable id: Long,
        @RequestBody dto: RacerDto
    ): ResponseEntity<RacerDto> {
        return ResponseEntity.ok(racerService.update(id, dto))
    }

    @DeleteMapping("/{id}")
    fun deleteRacer(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(racerService.delete(id))
    }
}