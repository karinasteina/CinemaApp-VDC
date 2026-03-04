package com.example.demo.service;

import com.example.demo.models.Movie;

import java.util.ArrayList;

public interface IMovieService {
    public ArrayList<Movie> retrieveAll() throws Exception;
}
