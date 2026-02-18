package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name="Movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
}
