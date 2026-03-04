package com.example.demo.repo;

import com.example.demo.models.Session;
import org.springframework.data.repository.CrudRepository;

public interface ISessionRepo extends CrudRepository<Session, Long> {
}
