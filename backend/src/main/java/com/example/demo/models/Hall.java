package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="HallTable")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(value = AccessLevel.NONE)
    @Column(name="HId")
    private long hid;

    @Column(name="HallRows")
    @Min(1)
    @Max(50)
    private int rows;

    @Column(name="TotalSeats")
    @Min(1)
    @Max(1000)
    private int totalSeats;

    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL)
    @ToString.Exclude
    @JsonIgnore
    private List<Session> sessions = new ArrayList<>();

    public Hall(int rows, int totalSeats){
        setRows(rows);
        setTotalSeats(totalSeats);
    }

    public int calculateSeatsPerRow(){
        return totalSeats / rows;
    }
}
