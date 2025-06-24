package com.speed320.racing_club.model

import jakarta.persistence.*
import java.io.Serializable

@Entity
@Table(name = "track_race")
data class TrackRace(
    @EmbeddedId
    val id: TrackRaceId? = null,

    @ManyToOne
    @MapsId("trackId")
    @JoinColumn(name = "track_id", nullable = false)
    val track: Track,

    @ManyToOne
    @MapsId("raceId")
    @JoinColumn(name = "race_id", nullable = false)
    val race: Race
)

@Embeddable
data class TrackRaceId(
    val trackId: Long,
    val raceId: Long
) : Serializable
