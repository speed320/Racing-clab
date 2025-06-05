package com.speed320.racing_club.models

import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalTime

@Entity
@Table(name = "Race")
data class Race(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val name: String,

    @Column(nullable = false)
    val date: LocalDate,

    val location: String? = null,

    @Column(nullable = false)
    val type: String,

    val distance: Float? = null,
    val description: String? = null,
    val place: String? = null,
    val time: LocalTime? = null,

    @ManyToMany
    @JoinTable(
        name = "Track_Race",
        joinColumns = [JoinColumn(name = "race_id")],
        inverseJoinColumns = [JoinColumn(name = "track_id")]
    )
    val tracks: Set<Track> = emptySet(),
)
