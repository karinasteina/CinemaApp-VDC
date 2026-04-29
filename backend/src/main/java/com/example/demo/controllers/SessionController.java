package com.example.demo.controllers;


import com.example.demo.service.ISessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SessionController {

    @Autowired
    ISessionService sessionService;

    @GetMapping("/session/{id}")
    public ResponseEntity<?> getControllerGetSessionById(@PathVariable long id){
        try{
            return new ResponseEntity<>(sessionService.getSessionById(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

}
