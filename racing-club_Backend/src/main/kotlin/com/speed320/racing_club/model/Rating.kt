package com.speed320.racing_club.model

import jakarta.persistence.*
import java.io.Serializable
import java.time.LocalTime

@Entity
@Table(name = "rating")
data class Rating(
    @EmbeddedId
    val id: RatingId? = null,

    @Column(name = "racer_place", nullable = false)
    var racerPlace: Int,
    @Column(name = "racer_time", nullable = false)
    var racerTime: LocalTime,

    @ManyToOne
    @MapsId("racerId")
    @JoinColumn(name = "id_racer", nullable = false)
    val racer: Racer,

    @ManyToOne
    @MapsId("raceId")
    @JoinColumn(name = "id_race", nullable = false)
    val race: Race
)

@Embeddable
data class RatingId(
    @Column(name = "id_racer")
    val racerId: Long,

    @Column(name = "id_race")
    val raceId: Long
) : Serializable