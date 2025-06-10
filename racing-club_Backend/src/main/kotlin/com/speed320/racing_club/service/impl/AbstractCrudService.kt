package com.speed320.racing_club.service.impl

import com.speed320.racing_club.service.CrudService
import org.springframework.data.jpa.repository.JpaRepository

abstract class AbstractCrudService<T, ID : Any, E : Any>(
    private val repository: JpaRepository<E, ID>,
    private val toDto: (E) -> T,
    private val toEntity: (T) -> E,
    private val updateEntity: (E, T) -> Unit = { _, _ -> }
) : CrudService<T, ID> {

    override fun create(dto: T): T {
        val entity = toEntity(dto)
        val savedEntity = repository.save(entity)
        return toDto(savedEntity)
    }

    override fun getById(id: ID): T {
        val entity = repository.findById(id).get()
        return toDto(entity)
    }

    override fun getAll(): List<T> {
        return repository.findAll().map { toDto(it) }
    }

    override fun update(id: ID, dto: T): T {
        val entity = repository.findById(id).get()
        updateEntity(entity, dto)
        val updatedEntity = repository.save(entity)
        return toDto(updatedEntity)
    }

    override fun delete(id: ID): Boolean {
        return if (repository.existsById(id)) {
            repository.deleteById(id)
            true
        } else {
            false
        }
    }
}