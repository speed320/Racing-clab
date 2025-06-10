package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Vehicle
import org.springframework.data.jpa.repository.JpaRepository

interface VehicleRepository : JpaRepository<Vehicle, Long> {
}