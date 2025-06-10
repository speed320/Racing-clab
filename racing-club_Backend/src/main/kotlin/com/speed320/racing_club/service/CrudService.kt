package com.speed320.racing_club.service

interface CrudService<T, ID> {
    fun create(dto: T): T
    fun getById(id: ID): T
    fun getAll(): List<T>
    fun update(id: ID, dto: T): T
    fun delete(id: ID): Boolean
}