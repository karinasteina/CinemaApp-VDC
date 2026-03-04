package com.example.demo.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Entity
@Table(name="TicketTable")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Ticket {
    @Column(name="TId")
    @Setter(value = AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long tid;

    @Column(name="HallRowNumber")
    @Min(1)
    @Max(50)
    private int rowNumber;

    @Column(name="SeatNumber")
    @Min(1)
    private int seatNumber;

    @Column(name="Email")
    @NotNull
    //@Pattern()
    private String email;

    @ManyToOne
    @JoinColumn(name="ssid")
    private Session session;

    public Ticket(int rowNumber, int seatNumber, String email, Session session){
        setRowNumber(rowNumber);
        setSeatNumber(seatNumber);
        setEmail(email);
        setSession(session);
    }
}
