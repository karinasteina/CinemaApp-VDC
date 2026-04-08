import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/movie/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [id]);

    if (!movie) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: ' 100vh', backgroundColor: '#111' }}>
                <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }} role="status"></div>
            </div>
        );
    }

    return (
        <div className="py-5" style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <div className="container">
                <Link to="/" className="btn btn-outline-light rounded-pill mb-5 px-4 shadow-sm border-secondary">
                    ← Back to Main
                </Link>
                <div className="row g-5">

                    <div className="col-lg-4 col-md-5 text-center">

                        <img
                            src={`/images/${movie.img}`}
                            className="img-fluid rounded-4 shadow-lg border border-secondary"
                            style={{ maxHeight: '500px', width: '80%', objectFit: 'cover' }}
                            alt={movie.title}
                        />
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <h1 className="display-3 fw-bold mb-2 text-white">{movie.title}</h1>
                        <div className="d-flex gap-3 mb-4 align-items-center">

                            <span className="badge rounded-pill bg-danger px-3 py-2 text-uppercase" style={{ fontSize: '0.7rem' }}>
                                {movie.genre}
                            </span>
                            <span className="text-warning fw-bold">
                                <i>{movie.length} min</i>
                            </span>

                        </div>
                        <hr className="border-secondary opacity-25 mb-4" />

                        <h4 className="text-danger mb-3 text-uppercase fw-bold small" style={{ letterSpacing: '2px' }}>Description</h4>
                        <p className="lead mb-5" style={{ opacity: '0.9' }}>
                            {movie.description}
                        </p>

                        <div>
                            <h3>Sessions:</h3>
                            {movie.sessions && movie.sessions.length > 0 ? (
                                movie.sessions.map((s) => (
                                    <div key={s.ssid}>
                                        <span><b>Time:</b> {s.time}</span>
                                        <span><b>Date:</b> {s.date}</span>
                                        <span><b>Hall:</b> {s.hall.hid}</span>
                                        <span><b>Price:</b> {s.price} $</span>
                                    </div>
                                ))

                            ) : (
                                <p> No sessions</p>
                            )}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );


}

export default MovieDetails;