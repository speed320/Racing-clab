package com.speed320.racing_club.service.impl

import com.speed320.racing_club.dto.VehicleDto
import com.speed320.racing_club.mapping.toDto
import com.speed320.racing_club.mapping.toEntity
import com.speed320.racing_club.model.Vehicle
import com.speed320.racing_club.repository.RacerRepository
import com.speed320.racing_club.repository.VehicleRepository
import com.speed320.racing_club.service.VehicleService
import org.springframework.stereotype.Service

@Service
class VehicleServiceImpl(
    private val vehicleRepository: VehicleRepository,
    private val racerRepository: RacerRepository
) : AbstractCrudService<VehicleDto, Long, Vehicle>(
    repository = vehicleRepository,
    toDto = Vehicle::toDto,
    toEntity = { dto ->
        val racer = racerRepository.findById(dto.racerId).get()
        dto.toEntity { racer }
    },
    updateEntity = { entity, dto ->
        entity.type = dto.type
        entity.make = dto.make
        entity.model = dto.model
        entity.year = dto.year
        entity.engineNumber = dto.engineNumber
        entity.description = dto.description
        entity.racer = racerRepository.findById(dto.racerId).get()
    }
), VehicleService