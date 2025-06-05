package com.speed320.racing_club.models

import jakarta.persistence.*
import java.io.Serializable
import java.time.LocalTime

@Entity
@Table(name = "Rating")
@IdClass(RatingId::class)
data class Rating(
    @Id
    @ManyToOne
    @JoinColumn(name = "id_racer", nullable = false)
    val racer:Racer,

    @Id
    @ManyToOne
    @JoinColumn(name = "id_race", nullable = false)
    val race:Race,

    @Column(nullable = false)
    val racerPlace: Int,

    @Column(nullable = false)
    val racerTime: LocalTime
)

data class RatingId(
    val racer: Long = 0,
    val race: Long = 0,
) : Serializable