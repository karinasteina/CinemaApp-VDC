import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieGallery() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div class="py-5" style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-5" style={{ letterSpacing: '2px' }}>MOVIES</h1>

        <div className="row g-4">

          {movies.map(movie => (
            <div key={movie.mid} className="col-lg-3 col-md4 col-sm-6">
              <div className="card h-100 border-0 shadow" style={{ backgroundColor: '#222', borderRadius: '15px' }}>
                <img
                  src={`/images/${movie.img}`}
                  className="card-img-top"
                  style={{
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '15px 15px 0 0'
                  }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <h5 className="fw-bold mb-1" style={{ color: '#fff' }}>{movie.title}</h5>
                  <p className="text-danger small mb-3 fw-semibold">{movie.genre}</p>

                  <div className="mt-auto">
                    <Link to={`/movie/${movie.mid}`} className="btn btn-danger fw-bold rounded-pill w-100 py-2">
                      BUY TICKET
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default MovieGallery;
