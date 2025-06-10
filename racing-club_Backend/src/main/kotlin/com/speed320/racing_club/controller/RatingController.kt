package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.RatingDto
import com.speed320.racing_club.model.RatingId
import com.speed320.racing_club.service.RatingService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/ratings")
class RatingController(
    private val ratingService: RatingService
) {

    @PostMapping
    fun createRating(@RequestBody dto: RatingDto): ResponseEntity<RatingDto> {
        return ResponseEntity.ok(ratingService.create(dto))
    }

    @GetMapping("/racer/{racerId}/race/{raceId}")
    fun getRating(
        @PathVariable racerId: Long,
        @PathVariable raceId: Long
    ): ResponseEntity<RatingDto> {
        val id = RatingId(racerId, raceId)
        return ResponseEntity.ok(ratingService.getById(id))
    }

    @GetMapping
    fun getAllRatings(): ResponseEntity<List<RatingDto>> {
        return ResponseEntity.ok(ratingService.getAll())
    }

    @PutMapping("/racer/{racerId}/race/{raceId}")
    fun updateRating(
        @PathVariable racerId: Long,
        @PathVariable raceId: Long,
        @RequestBody dto: RatingDto
    ): ResponseEntity<RatingDto> {
        val id = RatingId(racerId, raceId)
        return ResponseEntity.ok(ratingService.update(id, dto))
    }

    @DeleteMapping("/racer/{racerId}/race/{raceId}")
    fun deleteRating(
        @PathVariable racerId: Long,
        @PathVariable raceId: Long
    ): ResponseEntity<Boolean> {
        val id = RatingId(racerId, raceId)
        return ResponseEntity.ok(ratingService.delete(id))
    }
}