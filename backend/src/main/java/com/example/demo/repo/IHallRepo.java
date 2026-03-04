package com.example.demo.repo;

import com.example.demo.models.Hall;
import org.springframework.data.repository.CrudRepository;

public interface IHallRepo extends CrudRepository<Hall, Long> {
}
