package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="MovieTable")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Movie {
    @Column(name="MId")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(value = AccessLevel.NONE)
    private long mid;

    @Column(name="Title")
    @NotNull
    // @Pattern
    private String title;

    @Column(name="Length")
    @Min(5)
    @Max(300)
    private int length;

    @Column(name="Description")
    @NotNull
    // @Pattern
    private String description;

    @Column(name="Genre")
    @NotNull
    @Enumerated(EnumType.STRING)
    private Genre genre;

    @Column(name="Image")
    @NotNull
    // @Pattern
    private String img;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Session> sessions = new ArrayList<>();

    public Movie(String title, int length, String description, Genre genre, String img){
        setTitle(title);
        setLength(length);
        setDescription(description);
        setGenre(genre);
        setImg(img);
    }


}
