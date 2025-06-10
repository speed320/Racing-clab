package com.speed320.racing_club.mapping

import com.speed320.racing_club.dto.VehicleDto
import com.speed320.racing_club.model.Racer
import com.speed320.racing_club.model.Vehicle

fun Vehicle.toDto(): VehicleDto = VehicleDto(
    id = id,
    type = type,
    make = make,
    model = model,
    year = year,
    engineNumber = engineNumber,
    racerId = racer.id!!,
    description = description
)

fun VehicleDto.toEntity(racerProvider: (Long) -> Racer): Vehicle = Vehicle(
    id = id,
    type = type,
    make = make,
    model = model,
    year = year,
    engineNumber = engineNumber,
    racer = racerProvider(racerId),
    description = description
)