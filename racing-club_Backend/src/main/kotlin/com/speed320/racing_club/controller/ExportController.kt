package com.speed320.racing_club.controller

import com.speed320.racing_club.service.*
import com.speed320.racing_club.service.impl.ExcelExportService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/export")
class ExportController(
    private val excel: ExcelExportService,
    private val userSvc: UserService,
    private val racerSvc: RacerService,
    private val teamSvc: TeamService,
    private val raceSvc: RaceService,
    private val trackSvc: TrackService,
    private val vehicleSvc: VehicleService,
    private val ratingSvc: RatingService,
    private val employeeSvc: EmployeeService
) {
    @GetMapping("/users")
    fun users(): ResponseEntity<ByteArray> =
        excel.export("users", com.speed320.racing_club.dto.UserDto::class, userSvc.getAll())

    @GetMapping("/racers")
    fun racers(): ResponseEntity<ByteArray> =
        excel.export("racers", com.speed320.racing_club.dto.RacerDto::class, racerSvc.getAll())

    @GetMapping("/teams")
    fun teams(): ResponseEntity<ByteArray> =
        excel.export("teams", com.speed320.racing_club.dto.TeamDto::class, teamSvc.getAll())

    @GetMapping("/races")
    fun races(): ResponseEntity<ByteArray> =
        excel.export("races", com.speed320.racing_club.dto.RaceDto::class, raceSvc.getAll())

    @GetMapping("/tracks")
    fun tracks(): ResponseEntity<ByteArray> =
        excel.export("tracks", com.speed320.racing_club.dto.TrackDto::class, trackSvc.getAll())

    @GetMapping("/vehicles")
    fun vehicles(): ResponseEntity<ByteArray> =
        excel.export("vehicles", com.speed320.racing_club.dto.VehicleDto::class, vehicleSvc.getAll())

    @GetMapping("/ratings")
    fun ratings(): ResponseEntity<ByteArray> =
        excel.export("ratings", com.speed320.racing_club.dto.RatingDto::class, ratingSvc.getAll())

    @GetMapping("/employees")
    fun employees(): ResponseEntity<ByteArray> =
        excel.export("employees", com.speed320.racing_club.dto.EmployeeDto::class, employeeSvc.getAll())
}
