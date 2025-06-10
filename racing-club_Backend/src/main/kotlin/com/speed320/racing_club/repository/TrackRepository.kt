package com.speed320.racing_club.repository

import com.speed320.racing_club.model.Track
import org.springframework.data.jpa.repository.JpaRepository

interface TrackRepository : JpaRepository<Track, Long> {
}