package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Race
import org.springframework.data.jpa.repository.JpaRepository

interface RaceRepository : JpaRepository<Race, Long> {
}