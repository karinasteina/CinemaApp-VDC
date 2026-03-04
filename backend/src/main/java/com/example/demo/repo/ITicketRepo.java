package com.example.demo.repo;

import com.example.demo.models.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface ITicketRepo extends CrudRepository<Ticket, Long> {
}
