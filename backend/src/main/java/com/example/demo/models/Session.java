package com.example.demo.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="SessionTable")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Session {
    @Column(name="SSId")
    @Setter(value = AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ssid;

    @Column(name="Date")
    @NotNull
    @Future
    private LocalDate date;

    @Column(name="Time")
    @NotNull
    private LocalTime time;

    @Column(name="Price")
    @DecimalMin(value="0.0")
    @DecimalMax(value="100.0")
    private double price;

    @ManyToOne
    @JoinColumn(name="mid")
    private Movie movie;

    public Session(LocalDate date, LocalTime time, double price, Movie movie){
        setDate(date);
        setTime(time);
        setPrice(price);
        setMovie(movie);
    }
}
