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
                //Movie movie1 = new Movie("The Super Mario Galaxy Movie", 98, "The Super Mario Galaxy Movie (2026) is an animated sci-fi adventure sequel from Illumination and Nintendo, following Mario, Luigi, and Princess Peach into outer space to battle Bowser Jr. and meet Princess Rosalina.",
                //        Genre.Comedy, "image1.jpg");

              //  movieRepo.save(movie1);

               // Movie movie2 = new Movie("Minions & Monsters", 120, "The story follows the Minions in the 1920s attempting to make a monster movie, leading them to summon a creature named \"Goomi\" and unleash chaos in old Hollywood.",
                 //       Genre.Action, "image2.jpg");

              //  movieRepo.save(movie2);
            }
        };
    }

}
