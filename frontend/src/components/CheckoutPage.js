import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function CheckoutPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    const selectedSeats = location.state?.selectedSeats || [];

    const [email, setEmail] = useState('');

    const confirm = () => {
        const data = {
            sessionId: id,
            seats: selectedSeats,
            email: email
        };

        console.log("Data sent to the server:", data);
        alert("Ticket bought!")

    };

    return (
        <div className="py-5" style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
            <div className="container">
                <div className="mb-4 text-start">
                    <button className="btn btn-outline-light btn-sm rounded-pill px-3"
                        onClick={() => navigate(-1)}
                        style={{ border: '1px solid #333', fontSize: '0.8rem', letterSpacing: '1px', backgrounColor: 'transparent' }}

                    >
                        ← CHANGE SEATS
                    </button>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">

                        <div className="p-4 shadow-lg" style={{ backgroundColor: '#1a1a1a', borderRadius: '20px', border: '1px solid #333' }}>
                            <h2 className="text-center fw-bold mb-1" style={{ letterSpacing: '2px' }}>RESERVATION</h2>
                            <p className="text-center text-danger small mb-4" style={{ letterSpacing: '1px' }}>SESSION {id}</p>

                            <div className="mb-4">
                                <label className="text-uppercase small fw-bold mb-3 d-block" style={{ color: '#555', letterSpacing: '2px'}}>Your chosen seats</label>
                                {selectedSeats.length > 0 ? (
                                    <ul>
                                        {selectedSeats.map((s, i) => (
                                            <li key={i}> Row {s.r}, Seat {s.s}</li>
                                        ))}

                                    </ul>

                                ) : (
                                    <p>No chosen seats.</p>
                                )

                                }
                            </div>

                            <hr />
                            <h3>YOUR DATA:</h3>
                            <div>
                                <label>E-mail:</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>


                            </div>
                            <br />

                            <button onClick={confirm} disabled={selectedSeats.length === 0}>
                                CONFIRM RESERVATION
                            </button>
                        </div>







                    </div>
                </div>

            </div>

        </div>
    );


}

export default CheckoutPage;
