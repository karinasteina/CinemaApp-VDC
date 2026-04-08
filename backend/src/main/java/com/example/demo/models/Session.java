package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

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
    @JsonIgnore
    private Movie movie;

    @ManyToOne
    @JoinColumn(name="hid")
    private Hall hall;

    @OneToMany(mappedBy = "session", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Ticket> tickets = new ArrayList<>();

    public Session(LocalDate date, LocalTime time, double price, Movie movie, Hall hall){
        setDate(date);
        setTime(time);
        setPrice(price);
        setMovie(movie);
        setHall(hall);
    }
}
