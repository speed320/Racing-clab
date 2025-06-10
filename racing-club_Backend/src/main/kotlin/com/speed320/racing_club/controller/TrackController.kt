package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.TrackDto
import com.speed320.racing_club.service.TrackService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/tracks")
class TrackController(
    private val trackService: TrackService
) {

    @PostMapping
    fun createTrack(@RequestBody dto: TrackDto): ResponseEntity<TrackDto> {
        return ResponseEntity.ok(trackService.create(dto))
    }

    @GetMapping("/{id}")
    fun getTrack(@PathVariable id: Long): ResponseEntity<TrackDto> {
        return ResponseEntity.ok(trackService.getById(id))
    }

    @GetMapping
    fun getAllTracks(): ResponseEntity<List<TrackDto>> {
        return ResponseEntity.ok(trackService.getAll())
    }

    @PutMapping("/{id}")
    fun updateTrack(
        @PathVariable id: Long,
        @RequestBody dto: TrackDto
    ): ResponseEntity<TrackDto> {
        return ResponseEntity.ok(trackService.update(id, dto))
    }

    @DeleteMapping("/{id}")
    fun deleteTrack(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(trackService.delete(id))
    }
}