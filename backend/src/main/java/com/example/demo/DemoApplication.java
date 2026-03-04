package com.example.demo;
// vdc
import com.example.demo.models.Genre;
import com.example.demo.models.Hall;
import com.example.demo.models.Movie;
import com.example.demo.models.Session;
import com.example.demo.repo.IHallRepo;
import com.example.demo.repo.IMovieRepo;
import com.example.demo.repo.ISessionRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalTime;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

    @Bean
    public CommandLineRunner testDB(IMovieRepo movieRepo, IHallRepo hallRepo, ISessionRepo sessionRepo){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                if(movieRepo.count() == 0) {
                    Movie movie1 = new Movie("Test Movie", 95, "Just a test movie", Genre.Comedy, "image1.png");
                    movieRepo.save(movie1);

                    Hall hall1 = new Hall(10, 100);
                    hallRepo.save(hall1);

                    Session session1 = new Session(LocalDate.now().plusDays(23), LocalTime.now(), 7.50, movie1, hall1);
                    sessionRepo.save(session1);
                }
            }
        };
    }

}
