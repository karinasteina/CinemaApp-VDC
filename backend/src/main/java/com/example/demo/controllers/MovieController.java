package com.example.demo.controllers;

import com.example.demo.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    @Autowired
    IMovieService movieService;

    @GetMapping("/all")
    public ResponseEntity<?> getControllerAllMovies(){
        try{
            return new ResponseEntity<>(movieService.retrieveAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<?> getControllerGetMovieById(@PathVariable long id){
        try{
            return new ResponseEntity<>(movieService.getMovieById(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
