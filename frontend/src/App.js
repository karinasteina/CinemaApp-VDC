import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieGallery from "./components/MovieGallery";
import MovieDetails from "./components/MovieDetails";
import SeatMap from "./components/SeatMap";
import CheckoutPage from "./components/CheckoutPage";


function App() {
  
  return (
    <Router>

      <Routes>
        <Route path="/" element={<MovieGallery />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/session/:id" element={<SeatMap />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
      </Routes>

    </Router>
  );
  
}

export default App;
