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

                        <div className="mt-5 p-4" style={{
                            backgroundColor: '#161616',
                            borderRadius: '20px',
                            border: '1px solid #222'
                        }}>
                            <p className="text-light text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px' }}>
                                🎥 Available sessions</p>
                            <div className="d-flex flex-wrap gap-3">
                                {movie.sessions && movie.sessions.length > 0 ? (
                                    movie.sessions.map((s) => (
                                        <Link to = {`/session/${s.ssid}`}
                                            key={s.ssid}
                                            onClick={() => console.log("Seanss:", s.ssid)}
                                            className="btn btn-outline-secondary d-flex p-0 border-secondary shadow-sm"
                                            style={{
                                                minWidth: '200px',
                                                borderRadius: '12px',
                                                overflow: "hidden",
                                                textAlign: 'left'
                                            }}
                                        >
                                            <div className="px-4 py-3 border-end border-secondary border-opacity-50 d-flex align-items-center">
                                                <span className="display-6 fw-bold">
                                                    {s.time.substring(0, 5)}
                                                </span>
                                            </div>

                                            <div className="px-3 py-3 d-flex flex-column justify-content-center">
                                                <div className="fw-bold fs-5">{s.price.toFixed(2)} $</div>
                                                <div className="small opacity-75">
                                                    {s.hall ? s.hall.hid : '1'}. hall
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-light small">
                                        No sessions available just yet
                                    </p>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );


}

export default MovieDetails;