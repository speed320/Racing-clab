package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Racer
import org.springframework.data.jpa.repository.JpaRepository

interface RacerRepository : JpaRepository<Racer, Long> {
}