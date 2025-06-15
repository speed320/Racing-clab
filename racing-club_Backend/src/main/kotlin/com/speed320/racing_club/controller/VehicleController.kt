package com.speed320.racing_club.controller

import com.speed320.racing_club.dto.VehicleDto
import com.speed320.racing_club.service.VehicleService
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/vehicles")
class VehicleController(
    private val vehicleService: VehicleService
) {

    @PreAuthorize("hasAnyRole('Admin')")
    @PostMapping
    fun createVehicle(@RequestBody dto: VehicleDto): ResponseEntity<VehicleDto> {
        return ResponseEntity.ok(vehicleService.create(dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @GetMapping("/{id}")
    fun getVehicle(@PathVariable id: Long): ResponseEntity<VehicleDto> {
        return ResponseEntity.ok(vehicleService.getById(id))
    }

    @PreAuthorize("hasAnyRole('Admin', 'Racer', 'Organizer')")
    @GetMapping
    fun getAllVehicles(): ResponseEntity<List<VehicleDto>> {
        return ResponseEntity.ok(vehicleService.getAll())
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @PutMapping("/{id}")
    fun updateVehicle(
        @PathVariable id: Long,
        @RequestBody dto: VehicleDto
    ): ResponseEntity<VehicleDto> {
        return ResponseEntity.ok(vehicleService.update(id, dto))
    }

    @PreAuthorize("hasAnyRole('Admin')")
    @DeleteMapping("/{id}")
    fun deleteVehicle(@PathVariable id: Long): ResponseEntity<Boolean> {
        return ResponseEntity.ok(vehicleService.delete(id))
    }
}