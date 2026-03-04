package com.example.demo.repo;

import com.example.demo.models.Movie;
import org.springframework.data.repository.CrudRepository;

public interface IMovieRepo extends CrudRepository<Movie, Long> {
}
