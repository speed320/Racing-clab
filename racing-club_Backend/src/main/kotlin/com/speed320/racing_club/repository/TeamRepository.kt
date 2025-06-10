package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Team
import org.springframework.data.jpa.repository.JpaRepository

interface TeamRepository : JpaRepository<Team, Long> {
}