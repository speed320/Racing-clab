package com.speed320.racing_club.model

import jakarta.persistence.*
import java.time.LocalDate
import java.time.LocalTime

@Entity
@Table(name = "Race")
data class Race(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @Column(nullable = false)
    var name: String,

    @Column(nullable = false)
    var date: LocalDate,

    var location: String? = null,

    @Column(nullable = false)
    var type: String,

    var distance: Float? = null,
    var description: String? = null,
    var place: String? = null,
    var time: LocalTime? = null,
)
