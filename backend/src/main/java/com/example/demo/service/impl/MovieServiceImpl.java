package com.example.demo.service.impl;

import com.example.demo.models.Movie;
import com.example.demo.repo.IMovieRepo;
import com.example.demo.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MovieServiceImpl implements IMovieService {

    @Autowired
    IMovieRepo movieRepo;

    @Override
    public ArrayList<Movie> retrieveAll() throws Exception {
        if(movieRepo.count() == 0){
            throw new Exception("Movie table is empty");
        }

        ArrayList<Movie> result = (ArrayList<Movie>) movieRepo.findAll();

        return result;
    }

    @Override
    public Movie getMovieById(long id) throws Exception {
        if(!movieRepo.existsById(id)){
            throw new Exception("Movie not found");
        }

        Movie movie = movieRepo.findById(id).get();

        return movie;
    }

}
