package com.example.demo.controllers;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FirstController {
    @GetMapping(value = "/show")
    public String getControllerShowMessage(){
        return "Hello from Spring!";
    }
}
