import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";



function SeatMap() {
    const { id } = useParams();
    const [session, setSession] = useState(null);

    const navigate = useNavigate();

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (r, s) => {
        setSelectedSeats((prev) => {
            const isAlreadySelected = prev.find(seat => seat.r === r && seat.s === s);
            if (isAlreadySelected) {
                return prev.filter(seat => !(seat.r === r && seat.s === s));
            } else {
                return [...prev, { r, s }];
            }
        });
    };

    useEffect(() => {
        fetch(`http://localhost:8080/session/${id}`)
            .then((res) => res.json())
            .then((data) => setSession(data))
            .catch((err) => console.error("Error occured: ", err));

    }, [id]);


    if (!session) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: ' 100vh', backgroundColor: '#111' }}>
                <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }} role="status"></div>
            </div>
        );
    }

    const rowsCount = session.hall.rows;
    const seatsPerRow = session.hall.totalSeats / rowsCount;

    const rows = Array.from({ length: rowsCount }, (_, i) => i + 1);
    const seats = Array.from({ length: seatsPerRow }, (_, i) => i + 1);

    return (

        <div className="py-4" style={{ backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <div className="container-fluid px-md-5 px-3">

                <div className="mb-4 text-start">
                    <button
                        className="btn btn-outline-light btn-sm rounded-pill px-3"
                        onClick={() => navigate(-1)}
                        style={{ border: '1px solid #666', fontSize: '0.8rem', letterSpacing: '1px', backgroundColor: 'transparent' }}
                    >
                        ← BACK
                    </button>
                </div>

                <h1 className="text-center fw-bold mb-2" style={{ letterSpacing: '2px', color: '#fff' }}>CHOOSE YOUR SEAT</h1>
                <p className="text-center text-danger fw-semibold mb-5 small" style={{ letterSpacing: '1px' }}>
                    Session: {session.ssid} | Price: {session.price}$
                </p>

                <div className="row justify-content-center">
                    <div className="col-12 text-center">

                        <div className="mb-5 mx-auto" style={{ width: '100%', maxWidth: '1100px' }}>
                            <div style={{
                                height: '15px',
                                width: '100%',
                                backgroundColor: '#dc3545',
                                boxShadow: '0px 0px 30px rgba(220, 53, 69, 1)',
                                borderRadius: '20px'
                            }}>

                            </div>

                            <small className="text-white text-uppercase mt-3 d-block fw-bold" style={{ letterSpacing: '15px', fontSize: '0.85rem', opacity: '0.9' }}>
                                SCREEN
                            </small>
                        </div>

                        <div className="p-4 shadow-lg d-inline-block" style={{ backgroundColor: '#222', borderRadius: '15px', border: '1px solid #333' }}>
                            {rows.map((r) => (
                                <div key={r} className="d-flex align-items-center mb-2 justify-content-center">
                                    <div className="me-3 fw-bold small text-end" style={{ width: '30px', color: '#555' }}>{r}</div>
                                    {seats.map((s) => {

                                        const isSelected = selectedSeats.some(seat => seat.r === r && seat.s === s);
                                        return (
                                            <button
                                                key={s}
                                                className="btn btn-sm m-1 d-flex align-items-center justify-content center"
                                                style={{
                                                    width: '38px',
                                                    height: '38px',
                                                    color: '#eee',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.8rem',
                                                    backgroundColor: isSelected ? '#dc3545' : '#1a1a1a',
                                                    borderRadius: '6px',
                                                    border: isSelected ? '#dc3545' : '#1a1a1a',
                                                    transition: 'all 0.2s ease-in-out'
                                                }}

                                                onClick={() => handleSeatClick(r, s)}
                                            >{s}
                                            </button>
                                        );

                                    })}
                                </div>


                            ))}
                        </div>

                        <div className="mt-5 mb-4 text-white small d-flex justify-content-center gap-3">
                            <span><span className="d-inline-block rounded-1 me-1" style={{ width: '10px', height: '10px', backgroundColor: '#1a1a1a', border: '1px solid #333' }}></span>Free</span>
                            <span><span className="d-inline-block rounded-1 me-1" style={{ width: '10px', height: '10px', backgroundColor: '#dc3545', border: '1px solid #333' }}></span>Taken</span>
                        </div>

                        {selectedSeats.length > 0 && (
                            <div style={{marginTop: '20px'}}>
                                <hr />
                                <p>
                                    Chosen <b>{selectedSeats.length}</b> seats.
                                    Total <b>{(selectedSeats.length * session.price).toFixed(2)} $</b>
                                </p>

                                <button onClick={() => {
                                    navigate(`/checkout/${id}`, {
                                        state : {selectedSeats : selectedSeats}
                                    })
                                }}>
                                    Buy
                                </button> 

                            </div>
                        )}    


                    </div>
                </div>
            </div>

        </div>
    );


}

export default SeatMap;